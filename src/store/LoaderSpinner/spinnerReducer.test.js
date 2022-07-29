import spinnerReducer from "./spinnerReducer";


describe("spinner reducer", () => {
  const state = {
    loading: true,
  }

  it("should return default value", () => {
    expect(spinnerReducer(undefined,{})).toEqual(state);
  })

  describe("spinner reducer actions", () => {

    it("SPINNER_ON", () => {
      expect(spinnerReducer(state, {
        type: "SPINNER_ON",
        payload: false
      })).toEqual({...state, loading: false})
    })

    it("SPINNER_OFF", () => {
      expect(spinnerReducer(state,{
        type: "SPINNER_OFF",
        payload: true
      })).toEqual({...state, loading: true})
    })
  })

})