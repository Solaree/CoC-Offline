/// <reference path="frida-gum.d.ts" />
const base = Module.findBaseAddress("libg.so"); base?.add(0x2A11B6).writeU8(1);
