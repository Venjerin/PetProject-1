import { ResultCodeEnum, usersAPI } from "../api/api";
import { follow } from "./users-reducer"
jest.mock("../api/api")

const usersAPIMock = usersAPI;

const result = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}

//@ts-ignore
usersAPIMock.follow.mockReturnValue(result)

test ("", ()=> {
    const thunk = follow(1);

    const dispatchMock = jest.fn();

    //@ts-ignore
    thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})
