////////////////////////////////////      ใช้ Reducer ในการจัดการข้อมูลเเละส่ง providerไปจัดการข้อมูลcontext ใช้reduce เพื่อนำค่าออกมาจาก array มาใช้ในการคำนวณ
const CartReducer = (state, action) => {
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amout } = state.products.reduce(
      (cartTotal, Item) => {
        const { price, quantity } = Item;
        const totalprice = price * quantity;
        cartTotal.total += totalprice;
        cartTotal.amout += quantity;
        return cartTotal;
      },
      {
        //ค่าเรื่มต้นcarttotal
        total: 0,
        amout: 0,
      }
    );
    return {
      ...state,
      total,
      amout,
    };
  }
  if (action.type === "REMOVE") {
    ////filter กรองการข้อมูลในarray โดยเก็ยข้อมูล id ใน item เเละเช็คตามคำสั่ง โดยดูว่ารหัสสินค้าตัวไหนที่ตรงกับที่ส่งมาให้ถูกคัดกรองออกไปเพราะเงื่อนไขต้องการตัวที่ไม่ครวกัน
    return {
      ...state,
      products: state.products.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "ADD") {
    let updateProduct = state.products.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    return {
      ...state,
      products: updateProduct,
    };
  }
  if (action.type === "SUB") {
    let updatedProducts = state.products.map((item) => {
      if (item.id === action.payload && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    })
    
    return {
      ...state,
      products: updatedProducts,
    };
  }
  
};

export default CartReducer;
