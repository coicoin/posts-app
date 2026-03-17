import { useParams } from "react-router";

function useNumericParam(paramName: string) {
  const params = useParams();
  const param = params[paramName];

  if (!param) return undefined;

  const parsedValue = Number(param);
  return Number.isNaN(parsedValue) ? undefined : parsedValue;
}

export { useNumericParam };
