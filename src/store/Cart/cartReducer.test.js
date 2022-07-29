import {cartReducer} from "./cartReducer";


describe('cart reducer', () => {
  const state = {
    cart: [],
  }
  it('should return default value', () => {
    expect(cartReducer(undefined,{})).toEqual(state)
  })

  describe('cart actions', () => {
    it("SET_ITEMS_CART", () => {
      expect(cartReducer(state, {
        type: "SET_ITEMS_CART",
        payload: { item: {id: 1, body: "cart1"}}
      })).toEqual({...state, cart: [...state.cart, {id: 1, body: "cart1"}]})
    })

    it("CLEAR_ITEMS_CART", () => {
      expect(cartReducer(state, {
        type: "CLEAR_ITEMS_CART",
        payload: []
      })).toEqual({...state, cart: []})
    })
  })
})
