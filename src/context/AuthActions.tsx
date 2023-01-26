import { AnyARecord } from "dns";

//ユーザー入力に応じたアクションの設定
export const LoginStart = (user) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user: any) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginError = (error: any) => ({
  type: "LOGIN_ERROR",
  payload: error,
});

export const Follow = (userId: any) => ({
  type: "FOLLOW",
  payload: userId,
});

export const UnFollow = (userId: any) => ({
  type: "UNFOLLOW",
  payload: userId,
});
