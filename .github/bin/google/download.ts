#!/usr/bin/env -S deno run -A

/*
  https://developers.google.com/search/apis/ipranges/googlebot.json

  https://gstatic.com/ipranges/goog.json
  https://gstatic.com/ipranges/cloud.json

  https://gist.github.com/n0531m/f3714f6ad6ef738a3b0a?permalink_comment_id=3434372
*/


import { $ } from 'deps.ts'
import { bkt } from 'lib.ts'

$.cd(Deno.makeTempDirSync())

await $ `dl https://support.censys.io/hc/en-us/articles/360043177092-Opt-Out-of-Data-Collection -o optout.html`

