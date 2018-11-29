(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{198:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("The method of transferring contract-related assets is often slightly different from transferring the main coins of an asset chain.")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("There are a few more addresses to keep in mind when working with transactions using Crypto Conditions. It is not necessary to fully understand all of the addresses, but basic knowledge about a few addresses will be necessary.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("The first address you must understand is the pubkey. Any user using a Crypto Conditions smart contract must have a pubkey indicated in their daemon. This forms the basis for all addresses related to Crypto Conditions.")]),e._v(" "),s("p",[e._v("Typically, each Crypto Conditions smart contract will take the pubkey, combine it with a unique and contract-specific number called the "),s("code",[e._v("EVAL code")]),e._v(", and create a new "),s("a",{attrs:{href:"https://en.bitcoin.it/wiki/Base58Check_encoding",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("Base58Check")]),s("OutboundLink")],1),e._v(" encoded address from it. This "),s("code",[e._v("Base58Check")]),e._v(" encoded address will be the address you use for interacting on the Crypto Conditions-based contract.")]),e._v(" "),s("p",[e._v("To get a pubkey, launch the chain with the normal launch parameters and execute the "),s("router-link",{attrs:{to:"./../essential-rpc/wallet.html#getnewaddress"}},[s("code",[e._v("getnewaddress")])]),e._v(" rpc call.")],1),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("This will return a new address:")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("Now, execute the "),s("router-link",{attrs:{to:"./../essential-rpc/util.html#validateaddress"}},[s("code",[e._v("validateaddress")])]),e._v(" rpc call.")],1),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("This will return a json object with many properties. In the properties you will see:")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("This is will be your contract pubkey; you must now indicate it in the daemon.")]),e._v(" "),s("p",[e._v("To do this, first stop the daemon.")]),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("Then relaunch your daemon using the required parameters, and make sure to include your pubkey as an additional parameter. For example:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("The daemon will now use the pubkey as the basis for all Crypto Conditions-based smart contracts.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("The use-cases of the different addresses depends on the functionality in question, and the desired outcome.")]),e._v(" "),s("p",[e._v("Also, each smart contract may have its own RPC calls for moving coins or tokens within the contract. For example, if you are dealing with tokens, you may use the "),s("router-link",{attrs:{to:"./../cryptoconditions/cc-tokens.html#tokentransfer"}},[s("code",[e._v("tokentransfer")])]),e._v(" method.")],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"crypto-conditions-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crypto-conditions-instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Crypto Conditions Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"understanding-the-types-of-addresses-used-in-crypto-conditions-based-contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-types-of-addresses-used-in-crypto-conditions-based-contracts","aria-hidden":"true"}},[this._v("#")]),this._v(" Understanding the Types of Addresses Used in Crypto Conditions-Based Contracts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When making a transaction on the main blockchain of your asset chain, you typically only deal with a sending address and a receiving address. To move coins, you might use rpc calls such as "),t("code",[this._v("sendtoaddress")]),this._v(" or "),t("code",[this._v("z_sendmany")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-and-launching-with-a-pubkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-launching-with-a-pubkey","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating and Launching With a Pubkey")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("./komodo-cli -ac_name=HELLOWORLD getnewaddress")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("DO_NOT_USE_ADDRESSgg2ionaes1J5L786")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("./komodo-cli -ac_name=HELLOWORLD validateaddress DO_NOT_USE_ADDRESSgg2ionaes1J5L786")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('"pubkey": "DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("./komodo-cli -ac_name=HELLOWORLD stop")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("./komodo-cli -ac_name=HELLOWORLD -ac_supply=777777 -ac_cc=777 -pubkey=DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"other-crypto-conditions-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-crypto-conditions-addresses","aria-hidden":"true"}},[this._v("#")]),this._v(" Other Crypto Conditions Addresses")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To see your CC address, you will typically use an "),t("code",[this._v("address")]),this._v(" related rpc call from the list of available rpc calls of your chosen smart contract. For example, "),t("code",[this._v("rewardsaddress")]),this._v(" could return a response like this:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n  "result": "success",\n  "FaucetCCaddress": "RSxACZQhskPjQyxp7TUPG1oP1wm4agFycJ",\n  "CCaddress": "RSxACZQhskPjQyxp7TUPG1oP1wm4agFycJ",\n  "myCCaddress": "RSxACZQhskPjQyxp7TUPG1oP1wm4agFycJ",\n  "myaddress": "RANyPgfZZLhSjQB9jrzztSw66zMMYDZuxQ"\n}\n')])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("In this list, the "),s("code",[e._v("FaucetCCaddress")]),e._v(" is the address that corresponds to the creator of this instance of the "),s("code",[e._v("Faucet")]),e._v(" smart contract. "),s("code",[e._v("myCCaddress")]),e._v(" is the contract address you would use for transactions related to this specific "),s("code",[e._v("Faucet")]),e._v(" contract; it is based on the combination of your pubkey and the contract's unique EVAL code (which you do not typically see).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("myaddress")]),this._v(" property is the unmodified address that corresponds to your pubkey.")])}],!1,null,null,null);n.options.__file="cryptoconditions-instructions.md";t.default=n.exports}}]);