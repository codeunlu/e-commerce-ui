import { API } from "@services/API";
import { useState } from "react";

export type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

export type CallProps<T> = {
  body?: any;
  onSuccess: (data?: T) => void;
};

export type UseCallResponse<T> = {
  call: (method: HttpMethods, body?: any) => void;
  data?: T;
  loading: boolean;
};

function useCallApi<T>(endpoint: string): UseCallResponse<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);

  const call = (method: HttpMethods, props?: CallProps<T>) => {
    setLoading(true);

    API({
      method: method,
      url: endpoint,
      data: props?.body,
    })
      .then((response: any) => {
        if (response !== undefined || response !== null) {
          setData(response);
          props?.onSuccess && props.onSuccess(response);
        }

        if (response === undefined || response === null) {
          console.error("Not found!");
        }
      })
      .catch((error: any) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return { call, data, loading };
}

export default useCallApi;
