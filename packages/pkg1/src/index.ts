// pkg1/src/index.ts
import pkg2 from "@wuaixiaoyao-monorepo-lib/monorepo2";

function fun2() {
  pkg2();
  console.log("I am package 1");
}

export default fun2;
