import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}
async function login(input: LoginInputType) {
  //  return http.post(API_ENDPOINTS.LOGIN, input);

  return {
    token: `${input.email}.${input.remember_me}`.split("").reverse().join(""),
  };
}
export const useLoginMutation = () => {
  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data: any) => {
      Cookies.set("auth_token", data.token);
      http.post(API_ENDPOINTS.LOGIN, data);
      console.log(data.token);
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
};
