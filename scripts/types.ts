// types.ts

// Define the types for the project
interface Config {
  environment: string;
  port: number;
  url: string;
}

interface GitHubWebhookEventTypes {
  push: {
    ref: string;
    repository: {
      id: number;
      name: string;
      full_name: string;
    };
  };
}

interface MergeRequestEventTypes {
  object_kind: string;
  project_id: number;
  target_branch: string;
  source_branch: string;
  merge_result: {
    status: string;
    commit_message: string;
  };
}

interface MergeRequestEvent {
  object_kind: string;
  event_type: string;
  project_id: number;
  target_branch: string;
  source_branch: string;
  user_name: string;
  user_email: string;
  author_name: string;
  author_email: string;
  merge_result: MergeRequestEventTypes['merge_result'];
}

interface DeploymentEvent {
  object_kind: string;
  project_id: number;
  environment: string;
  ref: string;
  to_ref: string;
  status: string;
  status_text: string;
  finish_time: string;
  user: {
    name: string;
    email: string;
  };
}