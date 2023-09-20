#!/usr/bin/env -S deno run -A

import { $, log } from 'deps.ts'
import { bkt } from 'lib.ts'

await $ `echo hello world`

const param = '+%Y-%m-%d-%H%M%S'

const res = await bkt({
  to: '',
  cmd: `date ${param}`
})

log(res.stdout)
