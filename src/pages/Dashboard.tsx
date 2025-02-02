import "../assets/dashboard.css";

import { Navigate } from "react-router";
import { Cat } from "../components/Cat";
import { UserRepository } from "../fake-backend/repository/user";
import Navigation from "../components/Nav";
import { Reducer, useContext, useEffect, useReducer } from "react";

import Sidebar from "../components/Sidebar";
import { UserAction, userReducer } from "../store/reducer/user";
import { Options } from "../fake-backend/repository/cat";
import { UiContext } from "../store/context";
import User from "../fake-backend/entity/user";

export function Dashboard() {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("Dashboard must'be used with UiProvider");
  }

  const [ui] = context;
  const user = ui.user;
  if (!user) return <Navigate to={"/login"} />;

  const [store, dispatch] = useReducer<Reducer<UserRepository, UserAction>>(
    userReducer,
    user
  );

  useEffect(() => {
    localStorage.setItem(
      "user-context",
      JSON.stringify({ ...ui, user: store })
    );

    if (store !== null) {
      const users = User.repository as UserRepository[];
      const findIndex = users.findIndex(
        (user: UserRepository) =>
          user.username === store.username && user.password === store.password
      );

      users[findIndex] = store;
      localStorage.setItem("user", JSON.stringify(users));
    }
    localStorage.setItem(
      "user-context",
      JSON.stringify({ ...ui, user: store })
    );
  }, [store]);

  return (
    <>
      <Navigation
        addCat={() =>
          dispatch({
            type: "NEW_CAT",
          })
        }
      />
      <Sidebar>
        <div className="cat-info">
          <div className="profile">
            <Cat
              isSelected={true}
              {...store.cats[store.selected]}
              style={{ transform: `translateX(35px) translateY(-20px)` }}
              width="400px"
              height="400px"
            />
          </div>
          <input
            onChange={(e) => {
              dispatch({
                type: "EDIT_CAT",
                id: store.selected || 0,
                payload: {
                  name: e.target.value,
                },
              });
            }}
            className="title"
            value={store.cats?.[store.selected]?.name}
            type="text"
          />
        </div>

        <div>
          <div className="form-column">
            <label className="form-label" htmlFor="username">
              Body color #1
            </label>
            <input
              type="color"
              value={store.cats?.[store.selected]?.options?.bodyColor1}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_CAT",
                  id: store.selected || 0,
                  key: "options",
                  payload: {
                    bodyColor1: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-column">
            <label className="form-label" htmlFor="username">
              Body color #2
            </label>
            <input
              type="color"
              value={store.cats?.[store.selected]?.options?.bodyColor2}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_CAT",
                  id: store.selected || 0,
                  key: "options",
                  payload: {
                    bodyColor2: e.target.value,
                  } as Options,
                })
              }
            />
          </div>

          <div className="form-column">
            <label className="form-label" htmlFor="username">
              Head color
            </label>
            <input
              type="color"
              value={store.cats?.[store.selected]?.options?.headColor}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_CAT",
                  id: store.selected || 0,
                  key: "options",
                  payload: {
                    headColor: e.target.value,
                  } as Options,
                })
              }
            />
          </div>

          <div className="form-column">
            <label className="form-label" htmlFor="username">
              Pattern color
            </label>
            <input
              type="color"
              value={store.cats?.[store.selected]?.options?.patternColor}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_CAT",
                  id: store.selected || 0,
                  key: "options",
                  payload: {
                    patternColor: e.target.value,
                  } as Options,
                })
              }
            />
          </div>

          <div className="form-column">
            <label className="form-label" htmlFor="username">
              Eye color
            </label>
            <input
              type="color"
              value={store.cats?.[store.selected]?.options?.eyeColor}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_CAT",
                  id: store.selected || 0,
                  key: "options",
                  payload: {
                    eyeColor: e.target.value,
                  } as Options,
                })
              }
            />
          </div>

          <div className="form-column">
            <label className="form-label" htmlFor="username">
              Eye borrows' color
            </label>
            <input
              type="color"
              value={store.cats?.[store.selected]?.options?.eyeBorrowColor}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_CAT",
                  id: store.selected || 0,
                  key: "options",
                  payload: {
                    eyeBorrowColor: e.target.value,
                  } as Options,
                })
              }
            />
          </div>

          <div className="form-column">
            <label className="form-label" htmlFor="username">
              Stroke color
            </label>
            <input
              type="color"
              value={store.cats?.[store.selected]?.options?.strokeColor}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_CAT",
                  id: store.selected || 0,
                  key: "options",
                  payload: {
                    strokeColor: e.target.value,
                  } as Options,
                })
              }
            />
          </div>
        </div>
      </Sidebar>
      <div className="wrapper">
        {store.cats.map((cat, key) => (
          <Cat
            dispatch={(payload) =>
              dispatch({
                type: "EDIT_CAT",
                id: key,
                payload,
              })
            }
            key={key}
            index={key}
            selectCat={(payload) =>
              dispatch({
                type: "SELECT_CAT",
                payload,
              })
            }
            isSelected={store.selected == key}
            {...cat}
          />
        ))}
      </div>
    </>
  );
}
