#!/usr/bin/env -S deno run -A

import { $ } from '../lib/deps.ts'

await $ `echo hello world`
