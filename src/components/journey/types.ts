export type ProductionStageId = "soil" | "farm" | "process" | "certification" | "market";

export interface ProductionJourneyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProductionJourneyStage {
  id: ProductionStageId;
  index: number;
  number: string;
  label: string;
  kicker: string;
  title: string;
  subtitle: string;
  statement: string;
  description: string;
  elevation: string;
  coordinates: string;
  transformationGrammar: {
    from: string;
    action: string;
    to: string;
  };
  metrics: ProductionJourneyMetric[];
  palette: {
    bgHex: string;
    accentClass: string;
    accentHex: string;
    badgeBorder: string;
    strokeColor: string;
    glowColor: string;
  };
  typographyStyle: {
    titleClass: string;
    statementClass: string;
    stageCharacter: string;
  };
}

export interface EcosystemCategoryPreview {
  id: string;
  title: string;
  tagline: string;
  count: string;
  accent: string;
}

export interface ProductionEcosystemIntroData {
  eyebrow: string;
  title: string;
  supportingText: string;
  categories: EcosystemCategoryPreview[];
}
