import { useState } from "react";
import React from "react";
import styles from "./App.module.css";
import clsx from "clsx";

export function App() {
  return (
    <div className={clsx(styles.page)}>
      <header className={clsx(styles.header)}>this is header</header>
      <div className={clsx(styles.main)}>
        <canvas className={clsx(styles.mapGenerator)}>
          this is mapGenerator canvas
        </canvas>
        <canvas className={clsx(styles.inGame)}>this is inGame canvas</canvas>
      </div>
      <footer className={clsx(styles.footer)}>this is footer</footer>
    </div>
  );
}
