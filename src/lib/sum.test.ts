import { assert } from "chai"
import sum from "/src/lib/sum"

context("Typescript usage suite", () => {
  specify("should be able to execute a test 1", () => {
    assert.equal(sum(1, 2), 3)
  })
  specify("should be able to execute a test 2", () => {
    assert.notEqual(sum(1, 2), 4)
  })
})
