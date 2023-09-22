import React, { ErrorInfo } from 'react';

interface Props {
  children: any;
  onError: (error: Error, errorInfo: ErrorInfo) => void;
}

export class ErrorBoundary extends React.Component<Props, {}> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onError(error, errorInfo);
  }

  render() {
    return (this.props as Props).children;
  }
}
