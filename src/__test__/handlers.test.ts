import { describe,expect ,jest} from "@jest/globals";
import {home, about, notFound, internalError} from "../Handlers";
import getFortune from "../Fortunes";

test("home page render", ()=>{
    const req: any = {} as Request
    const res: any  = {render: jest.fn()}
    home(req, res)
    expect(res.render.mock.calls[0][0]).toBe("home")
});

test("about page render",()=>{
    const req: any = {} as Request;
    const res: any = {render: jest.fn()};
    about(req, res);
    expect(res.render.mock.calls.length).toBe(1); // test to be called once
    expect(res.render.mock.calls[0][0]).toBe("about");
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.stringMatching(/\w/),
    }))

    console.log(res.render.mock.calls[0][1])
})

// expect.stringMatching(/\w/)


test("404 error handler", ()=>{
    const req: any = {} as Request;
    const res: any = {render: jest.fn()}
    notFound(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("404"); //404 name of the view
})

test("internal server error",()=>{
    const err: any = new Error("some error")
    const req: any = {};
    const res: any = {render: jest.fn()}
    const next = jest.fn();
    internalError(err, req, res, next);
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe("500");

})