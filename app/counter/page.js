// Counter.js
"use client";
import React, { useState } from "react";
import Counter from "../../features/Counter.js";

function CounterPage() {
  const [count, setCount] = useState(0);

  return <Counter />;
}

export default CounterPage;
