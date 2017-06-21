import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Database from 'database'

chai.use(chaiChange)

describe.only('Database', function() {
'use strict'
let db

it('exists', function() {
  expect(Database).to.be.a('function')
})

describe(  'itemsInSection', function() {
      context( 'when filtering for a certain section ', function() {
        const db = new Database()

        it('filters items by section', function() {

          expect(db.itemsInSection("bulk")).to.equal(["Flour", "Pasta", "Rice"])
        })

describe(  'cheapItems', function() {
      context( 'when filtering by price ', function() {
        const db = new Database()

        it('filters items by price and only displays items less than $10.00', function() {

          expect(db.cheapItems()).to.equal(["Fish", "Honey"])
        })

describe(  'countItemsInSection', function() {
      context( 'when counting the number of items in a given section ', function() {
        const db = new Database()

        it('filters items by section, then counts ', function() {

          expect(db.countItemsInSection("packaged")).to.equal(5)
