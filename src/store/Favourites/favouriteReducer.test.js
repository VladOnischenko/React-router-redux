import {favouriteReducer} from './favouriteReducer'

describe('favourites reducer', () => {
  const state = {
    stars: [],
  }
  
  it('should return default value', () => {
    expect(favouriteReducer(undefined, {})).toEqual(state)
  })

 it('should add to favourites', () => {
   expect(favouriteReducer(state, {
     type: "SET_ITEMS_FAVORITES",
     payload: {item: {id: 2, body: 'test2'}}
   })).toEqual({stars: [...state.stars, {id: 2, body: 'test2'}]})
 })

  it('should return without duplicate', () => {
    expect(favouriteReducer(state, {
      type: "SET_ITEMS_FAVORITES",
      payload: {item: {id: 2, body: 'test2'}}
    })).toEqual({stars: [{id: 2, body: 'test2'}]})
  })
})