export type CaseStage = {
  title: string;
  date: string;
  status: "concluded" | "current" | "pending";
};

export type LegalCase = {
  title: string;
  stages: CaseStage[];
  currentStage: string; // Name of the current stage
  caseDescription: string; // General case description
  tags: string[];
  code: string;
};
