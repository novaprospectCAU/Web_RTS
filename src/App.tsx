import { useState } from "react";
import React from "react";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <header className="header">this is header</header>
      <div className="main">
        <canvas className="mapGenerator">this is mapGenerator canvas</canvas>
        <canvas className="inGame">this is inGame canvas</canvas>
      </div>
      <footer className="footer">this is footer</footer>
    </div>
  );
}
