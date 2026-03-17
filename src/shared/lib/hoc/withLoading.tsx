import { memo, useState, type ComponentType } from "react";

export type WithLoadingProps = {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};

function withLoading<T extends object>(WrappedComponent: ComponentType<T & WithLoadingProps>) {
  const WithLoading = (props: T) => {
    const [loading, setLoading] = useState(false);

    return (
      <WrappedComponent {...props} loading={loading} setLoading={setLoading} />
    );
  };
  WithLoading.displayName = `withLoading(${WrappedComponent.displayName || WrappedComponent.name})`;
  return memo(WithLoading);
}

export { withLoading };
