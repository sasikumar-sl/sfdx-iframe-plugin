import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: any;
  onError: (error: Error, errorInfo: ErrorInfo) => void;
}

export class ErrorBoundary extends Component<Props, {}> {
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.props.onError(error, errorInfo);
    }

    render() {
        return (this.props as Props).children;
    }
}
