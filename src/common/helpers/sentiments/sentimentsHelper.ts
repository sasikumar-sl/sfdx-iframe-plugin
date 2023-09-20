import { CSSProperties } from 'react';
import { sentimentColors } from './sentimentsColors';
import { API_SENTIMENT_COLORS } from '../../constants';

export interface IShTimelineItemLabel {
    text: string;
    background: string;
    color: string;
};

export const sentimentNames = {
  negativeSentiments: 'Negative',
  positiveSentiments: 'Positive',
  escalationRequests: 'Escalation Request',
  featureRequests: 'Feature Request',
  criticalIssues: 'Critical Issue',
  productionIssues: 'Production Issue',
  productFeedback: 'Product Feedback',
  competitiveThreats: 'Churn Risk',
  needAttention: 'Need Attention',
};

export const getNeedAttentionColorByScore = (score: number) => {
  let colors: { color: string; backgroundColor: string } = {
    color: '#fff',
    backgroundColor: '#458FF9',
  };
  if (score >= 90) return { ...colors, backgroundColor: '#FD8DD6' };

  if (score >= 80) return { ...colors, backgroundColor: '#EF8EBD' };

  if (score >= 70) return { ...colors, backgroundColor: '#D776C3' };

  if (score >= 60) return { ...colors, backgroundColor: '#BC5DCD' };

  if (score >= 50) return { ...colors, backgroundColor: '#AB72DF' };

  if (score >= 40) return { ...colors, backgroundColor: '#7A74F4' };

  return { ...colors, backgroundColor: '#458FF9' };
};

export const getSentimentStyle = (score: number) => {
  let colors: { color: string; backgroundColor: string } = {
    color: sentimentColors.fallbackTextColor,
    backgroundColor: sentimentColors.fallbackBackground,
  };

  if (score == null) return colors;

  if (score >= 93)
    return {
      ...colors,
      backgroundColor: sentimentColors.veryPositiveBackground,
    };

  if (score >= 84)
    return { ...colors, backgroundColor: sentimentColors.positiveBackground };

  if (score >= 75)
    return {
      ...colors,
      backgroundColor: sentimentColors.slightlyPositiveBackground,
      color: sentimentColors.neutralTextColor,
    };

  if (score >= 65)
    return {
      ...colors,
      backgroundColor: sentimentColors.neutralBackground,
      color: sentimentColors.neutralTextColor,
    };

  if (score >= 55)
    return {
      ...colors,
      backgroundColor: sentimentColors.slightlyNegativeBackground,
      color: sentimentColors.neutralTextColor,
    };

  if (score >= 31)
    return { ...colors, backgroundColor: sentimentColors.negativeBackground };

  return { ...colors, backgroundColor: sentimentColors.veryNegativeBackground };
};

export const formatLabels = (labels: string[]): IShTimelineItemLabel[] => {
  return labels.map((label) => ({
    text: label,
    background:
      API_SENTIMENT_COLORS[label]?.background ??
      sentimentColors.fallbackBackground,
    color:
      API_SENTIMENT_COLORS[label]?.text ?? sentimentColors.fallbackTextColor,
  }));
};

export const getSignalLabelStyles = (
  label: string,
  additionalStyles?: CSSProperties
) => ({
  background:
    API_SENTIMENT_COLORS[label]?.background ??
    sentimentColors.fallbackBackground,
  color: API_SENTIMENT_COLORS[label]?.text ?? sentimentColors.fallbackTextColor,
  ...(additionalStyles ?? {}),
});