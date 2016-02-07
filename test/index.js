import test from "tape"
import productShowcase from "../src"

test("productShowcase", (t) => {
  t.plan(1)
  t.equal(true, productShowcase(), "return true")
})
