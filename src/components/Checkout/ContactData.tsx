import Button from "@shared/UI/Button/Button";

import styles from "./style.module.css";
import { useState } from "react";
import {
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { IIngs } from "@components/Checkout";
import { postOrder } from "@api/request";
import Loader from "@shared/UI/Loader/Loader";

const ContactData = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const { ings } = useOutletContext<{ ings: IIngs }>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };

  const onOrderSend = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      ingredients: { ...ings },
      customer: { ...info },
    };

    postOrder(order).finally(() => {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });
  };

  if (loading) return <Loader />;

  return (
    <div className={styles.contactData}>
      <h3 className={styles.title}>Введите свои данные</h3>
      <form onSubmit={onOrderSend}>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="name"
            value={info.name}
            type="text"
            placeholder="Ваше имя"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="email"
            value={info.email}
            type="email"
            placeholder="Ваш email"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="address"
            value={info.address}
            type="text"
            placeholder="Ваш адрес"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="phone"
            value={info.phone}
            type="tel"
            placeholder="Ваш телефон"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <Button color={"danger"} click={() => {}}>
            Заказать
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactData;
