import { describe, expect, test } from 'vitest'

import { Spine } from "../src"


describe('selector', () => {

    test('is Group', () => {

        const selector = new Spine({
            x: 200,
            y: 200,
            scale: 0.3
          })
        expect(selector.children).toBeTruthy()

    })

    test('async: is Group', async () => {
        await new Promise(function (resolve) {

            const spine = new Spine({
                x: 200,
                y: 200,
                scale: 0.3
              })
            expect(spine.children).toBeTruthy()
            resolve(true)
        })

    })

})