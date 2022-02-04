import React, { useEffect, useState, useCallback } from "react";
import Category from "./category.js";

import categories from "../../data/data-mock.js";

export default function Main() {
  return (
    <div>
      {categories.map((category, key) => (
        <Category category={category} />
      ))}
    </div>
  );
}
