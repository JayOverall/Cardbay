import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'

const initState = {

    items:[
        {id:1,title:'2019-20 Panini Chronicles Basketball Blaster Box ', desc: "Find some of the popular rookie card sets from years past in Chronicles! Collect the top rookies from the 2019 NBA Draft in these sets! 8 packs per box, 5 cards per pack.", price:179.95,img:Item1},

        {id:2,title:'2018-19 Donruss Optic Basketball Choice Box ', desc: "Along with the Choice Exclusive Opti-Chrome stock, collect all the best Prizm Holo cards, including all of the top Rated Rookies--Trae Young, Luka Doncic, and Deandre Ayton! 1 Pack Per Box, 6 Cards Per Pack", price:2499.95,img: Item2},

        {id:3,title:'2019-20 Panini Basketball Lakers Champions Team Set Blaster Box', desc: "Congratulations to the 2020 NBA Champion Los Angeles Lakers! The NBA Championship box set contains 30 cards featuring in-game photography, celebratory shots, and trophy images.",price:74.95,img: Item3},

        {id:4,title:'2019-20 Panini Donruss Optic Basketball Retail Box ', desc: "Look for Rookie Cards of Zion Wiliamson, Ja Morant, RJ Barrett, De'Andre Hunter, Darius Garland, Jarrett Culver, Coby White, Jaxson Hayes, Rui Hachimura and Cam Reddish!. 4 Cards per pack, 20 Packs per box.", price:260.95,img:Item4},

        {id:5,title:' 2019-20 Panini Spectra Basketball Hobby Pack ', desc: "All new to Spectra this year: The super-short printed Color Blast insert makes its debut with 25 of the top current players, rookies and veterans! 4 cards per pack.", price:649.95,img: Item5},

        {id:6,title:'2019-20 Panini Donruss Basketball Choice Box ', desc: "Debuting in 2019-20, Donruss Choice provides collectors with all the content of Donruss in a streamlined format! Look for 2 Autographs, 3 Parallels and 5 Exclusive Rated Rookies per box, on average! 10 cards per pack, 1 pack per box",price:749.95,img: Item6}

    ],

    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }

    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }

  else{
    return state
    }

}

export default cartReducer
