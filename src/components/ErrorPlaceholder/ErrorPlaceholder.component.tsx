import React from 'react';
import {
  MailTo,
  ErrorBox,
  ErrorInfo,
  ErrorTitle,
  ErrorBackdrop,
  StyledErrorIcon,
} from './ErrorPlaceholder.styles';

type Props = {
  title?: string;
  message?: string | React.ReactNode;
};

export default function ErrorPlaceholder({
  title = 'Failed to load data from SupportLogic',
  message = 'Please reach out to support at',
}: Props) {
  return (
    <ErrorBackdrop>
      <ErrorBox>
        <StyledErrorIcon />
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorInfo>{message}</ErrorInfo>
        <MailTo href="mailto:support@supportlogic.io">
          support@supportlogic.io
        </MailTo>
      </ErrorBox>
    </ErrorBackdrop>
  );
}
