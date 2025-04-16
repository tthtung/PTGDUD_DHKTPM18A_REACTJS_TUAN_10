import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalPrice,
  selectTotalQuantity,
} from "../components/redux_toolkit/cartSlice";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleAddSample = () => {
    dispatch(addItem({ id: 1, name: "Sản phẩm A", price: 100000, quantity: 1 }));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Giỏ hàng</h2>
      <button onClick={handleAddSample}>+ Thêm Sản phẩm A</button>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            <strong>{item.name}</strong> - {item.price.toLocaleString()}đ
            <br />
            Số lượng:{" "}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              min={1}
              style={{ width: 60 }}
            />
            <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: 10 }}>
              ❌ Xóa
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <p><strong>Tổng số lượng:</strong> {totalQuantity}</p>
      <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ</p>
    </div>
  );
}
