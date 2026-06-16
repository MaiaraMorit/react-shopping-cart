import { addToCart, removeFromCart, calculateTotal } from "../src/utils/cart";
import { describe, test, expect } from "@jest/globals";

describe("Cart Utils", () => {
    describe("addToCart", () => {
        test("A new product should be added to the cart", () => {
            const cart = [];
            const product = { id: 1, name: "Mouse", price: 50 };

            const result = addToCart(cart, product);

            expect(result).toEqual([
            { id: 1, name: "Mouse", price: 50, quantity: 1 },
            ]);
        });

        test("The quantity should be increased if the product already exists", () => {
            const cart = [
            { id: 1, name: "Mouse", price: 50, quantity: 1 },
            ];

            const product = { id: 1, name: "Mouse", price: 50 };

            const result = addToCart(cart, product);

            expect(result).toEqual([
            { id: 1, name: "Mouse", price: 50, quantity: 2 },
            ]);
        });
        });

        describe("removeFromCart", () => {
        test("The product should be removed when the quantity is 1", () => {
            const cart = [
            { id: 1, name: "Mouse", price: 50, quantity: 1 },
            ];

            const product = { id: 1 };

            const result = removeFromCart(cart, product);

            expect(result).toEqual([]);
        });

        test("The quantity should be reduced if it is greater than 1", () => {
            const cart = [
            { id: 1, name: "Mouse", price: 50, quantity: 2 },
            ];

            const product = { id: 1 };

            const result = removeFromCart(cart, product);

            expect(result).toEqual([
            { id: 1, name: "Mouse", price: 50, quantity: 1 },
            ]);
        });
        });

        describe("calculateTotal", () => {
        test("It should return 0 if the cart is empty", () => {
            expect(calculateTotal([])).toBe(0);
        });

        test("It should calculate the total correctly.", () => {
            const cart = [
            { price: 10, quantity: 2 }, // 20
            { price: 5, quantity: 3 },  // 15
            ];

            const result = calculateTotal(cart);

            expect(result).toBe(35);
        });
        });
});