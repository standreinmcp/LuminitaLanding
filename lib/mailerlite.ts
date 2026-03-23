const MAILERLITE_API_BASE = "https://connect.mailerlite.com/api";

interface SubscribeParams {
  email: string;
  name: string;
}

interface MailerLiteError {
  message: string;
  errors?: Record<string, string[]>;
}

export async function addSubscriber({ email, name }: SubscribeParams) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey) {
    throw new Error("MAILERLITE_API_KEY is not set in environment variables");
  }

  const [firstName, ...rest] = name.trim().split(" ");
  const lastName = rest.join(" ");

  const body: Record<string, unknown> = {
    email,
    fields: {
      name: firstName,
      last_name: lastName,
    },
  };

  if (groupId) {
    body.groups = [groupId];
  }

  const response = await fetch(`${MAILERLITE_API_BASE}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error: MailerLiteError = await response.json();

    if (response.status === 422 && error.message?.includes("already")) {
      return { success: true, alreadySubscribed: true };
    }

    throw new Error(error.message || "Failed to subscribe");
  }

  return { success: true, alreadySubscribed: false };
}
