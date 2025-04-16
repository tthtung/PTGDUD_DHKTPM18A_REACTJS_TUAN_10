import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, editEvent, deleteEvent } from "../components/redux_toolkit/eventSlice";

export default function EventManager() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  const [form, setForm] = useState({ title: "", date: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (!form.title || !form.date) return;

    if (editingId) {
      dispatch(editEvent({ id: editingId, ...form }));
    } else {
      dispatch(addEvent(form));
    }

    setForm({ title: "", date: "", description: "" });
    setEditingId(null);
  };

  const handleEdit = (event) => {
    setForm({
      title: event.title,
      date: event.date,
      description: event.description,
    });
    setEditingId(event.id);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📅 Quản lý sự kiện</h2>

      <input
        type="text"
        placeholder="Tên sự kiện"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mô tả"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm sự kiện"}
      </button>

      <ul style={{ marginTop: 20 }}>
        {events.map((e) => (
          <li key={e.id}>
            <strong>{e.title}</strong> ({e.date}) - {e.description}
            <button onClick={() => handleEdit(e)} style={{ marginLeft: 10 }}>
              ✏️
            </button>
            <button
              onClick={() => dispatch(deleteEvent(e.id))}
              style={{ marginLeft: 5 }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
