import { LIMIT_PAGE } from "@/utils/content";
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
  totalPage: number;
  setTotalPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
};

function useCallApi<T>(endpoint: string): UseCallResponse<T> {
  const [data, setData] = useState<T>();
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const call = (method: HttpMethods, props?: CallProps<T>) => {
    setLoading(true);

    API({
      method: method,
      url: endpoint,
      data: props?.body,
    })
      .then((response: any) => {
        setData(response.data);
        const limit = LIMIT_PAGE(response.data.length);
        setTotalPage(limit);

        if (
          response.status !== undefined ||
          (response.status === 200 && response.statusText === "OK")
        ) {
          props?.onSuccess && props.onSuccess(response.data);
        }
      })
      .catch((error: any) => {
        console.error("Hata: ", error);
      })
      .finally(() => setLoading(false));
  };

  return { call, data, totalPage, setTotalPage, loading };
}

export default useCallApi;
