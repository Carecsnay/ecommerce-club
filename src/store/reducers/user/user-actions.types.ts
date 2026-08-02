//boas práticas do redux é usar a entidade/natureza da action
const UserActionTypes = {
    LOGIN: "user/login" as const, //o tipo de login vai ser o valor dele 'user/login' e não uma string
    LOGOUT: "user/logout" as const,
};

export default UserActionTypes;
