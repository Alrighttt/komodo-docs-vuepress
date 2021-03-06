# Control

The following RPC calls interact with the `komodod` software, and are made available through the `komodo-cli` software.

## getinfo

**getinfo**

The `getinfo` method returns an object containing various state info.

### Arguments:

Structure|Type|Description
---------|----|-----------
(none)                                       |                             |

### Response:

Structure|Type|Description
---------|----|-----------
{                                            |                             |
"version"                                    |(numeric)                    |the server version
"protocolversion"                            |(numeric)                    |the protocol version
"walletversion"                              |(numeric)                    |the wallet version
"balance"                                    |(numeric)                    |the total balance of the wallet
"blocks"                                     |(numeric)                    |the current number of blocks processed in the server
"timeoffset"                                 |(numeric)                    |the time offset
"connections"                                |(numeric)                    |the number of connections
"proxy"                                      |(string, optional)           |the proxy used by the server
"difficulty"                                 |(numeric)                    |the current difficulty
"testnet"                                    |(boolean)                    |if the server is using testnet or not
"keypoololdest"                              |(numeric)                    |the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
"keypoolsize"                                |(numeric)                    |how many new keys are pre-generated
"unlocked_until"                             |(numeric)                    |the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
"paytxfee"                                   |(numeric)                    |the transaction fee set in COIN/kB
"relayfee"                                   |(numeric)                    |minimum relay fee for non-free transactions in COIN/kB
"errors"                                     |(string)                     |any error messages
}                                            |                             |

#### :pushpin: Examples:

Command:

```
./komodo-cli getinfo
```

Response:

```
{
  "version": 1001550,
  "protocolversion": 170003,
  "KMDversion": "0.2.0",
  "notarized": 0,
  "prevMoMheight": 0,
  "notarizedhash": "0000000000000000000000000000000000000000000000000000000000000000",
  "notarizedtxid": "0000000000000000000000000000000000000000000000000000000000000000",
  "notarizedtxid_height": "mempool",
  "KMDnotarized_height": 0,
  "notarized_confirms": 0,
  "walletversion": 60000,
  "balance": 10.16429765,
  "blocks": 459,
  "longestchain": 0,
  "timeoffset": 0,
  "tiptime": 1536624090,
  "connections": 0,
  "proxy": "",
  "difficulty": 1.000026345948652,
  "testnet": false,
  "keypoololdest": 1536262464,
  "keypoolsize": 101,
  "paytxfee": 0.00000000,
  "relayfee": 0.00000100,
  "errors": "",
  "name": "SIDD",
  "p2pport": 9800,
  "rpcport": 9801,
  "magic": -759875707,
  "premine": 10
}
```

You can find your `rpcuser`, `rpcpassword`, and `rpcport` in the coin's .conf file.

Command:

```
curl --user myrpcuser:myrpcpassword --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:myrpcport/
```

Response:

```
{
  "result": {
    "version": 1001550,
    "protocolversion": 170003,
    "KMDversion": "0.2.0",
    "notarized": 0,
    "prevMoMheight": 0,
    "notarizedhash": "0000000000000000000000000000000000000000000000000000000000000000",
    "notarizedtxid": "0000000000000000000000000000000000000000000000000000000000000000",
    "notarizedtxid_height": "mempool",
    "KMDnotarized_height": 0,
    "notarized_confirms": 0,
    "walletversion": 60000,
    "balance": 10.16429765,
    "blocks": 459,
    "longestchain": 0,
    "timeoffset": 0,
    "tiptime": 1536624090,
    "connections": 0,
    "proxy": "",
    "difficulty": 1.000026345948652,
    "testnet": false,
    "keypoololdest": 1536262464,
    "keypoolsize": 101,
    "relayfee": 1e-06,
    "paytxfee": 0,
    "errors": "",
    "name": "SIDD",
    "p2pport": 9800,
    "rpcport": 9801,
    "magic": -759875707,
    "premine": 10
  },
  "error": null,
  "id": "curltest"
}
```

**help ( "command" )**

The `help` method lists all commands, or all information for a specified command.

### Arguments:

Structure|Type|Description
---------|----|-----------
"command"                                    |(string, optional)           |the command requiring assistance


Response:

Structure|Type|Description
---------|----|-----------
"command"                                    |(string, optional)           |the command requiring assistance

#### :pushpin: Examples:

## stop

**stop**

The `stop` method instructs the coin daemon to shut down.

The amount of time it takes to shut down the chain will vary depending on the chain's current state.

::: warning
Forcefully stopping the chain should be avoided, as it may cause a corruption in the local database. In the event of a corrupted database, the user will need to <b>resync</b>.
:::

### Arguments:

Structure|Type|Description
---------|----|-----------
(none)                                       |                             |

### Response:

Structure|Type|Description
---------|----|-----------
Komodo server stopping                       |                             |
[COIN] Komodo server stopping                |                             |

#### :pushpin: Examples:

Command:

```
./komodo-cli stop
```

Response:

```
"Komodo server stopping"
```
