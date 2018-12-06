(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{193:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Komodo is built on the Bitcoin protocol, and traditionally, Bitcoin Script is thought of as being incapable of supporting smart contracts. This is mostly a consequence of the fact that Bitcoin Script is (intentionally) not Turing complete. Now, all of this is changing with Crypto Conditions, a utxo-based smart contract protocol.")]),e._v(" "),a("p",[e._v("As is often the case, Komodo Platform is leading the blockchain industry in this brand new technology. This section will explain what Crypto Conditions is, how it works, and how utxo-based smart contracts will dramatically alter the blockchain landscape.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("The very first block in the Bitcoin blockchain was mined on or around January 3, 2009. Since then, this revolutionary technology has exploded, forever changing the way we think of money and currency. We owe many of these developments to Satoshi Nakamoto and his original Bitcoin-core code.")]),e._v(" "),a("p",[e._v("The Bitcoin-core code itself is written in C++. A time-tested and well-known programming language, C++ is Turing complete and can therefore do all that any other Turing complete programming language can do.")]),e._v(" "),a("p",[e._v('However, Bitcoin transactions are not executed with C++. Instead, transactions are carried out with a special protocol called Bitcoin Script. Script has a number of "opcodes", or commands, that tell nodes how to deal with any specific transaction request.')]),e._v(" "),a("p",[e._v('While most computer programming languages are considered Turing complete, Bitcoin Script is not. It’s widely accepted that this was an intentional decision. But before we can discuss the relative merits of making a programming language Turing complete, let’s take a moment to understand what exactly "Turing complete" means.')]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("In 1936, a British computer scientist and mathematician named Alan Turing published an academic paper called “On Computable Numbers, with an Application to the Entscheidungsproblem.” It is a seminal essay in the fields of computer science and computational theory.")]),e._v(" "),a("p",[e._v("In the essay, Turing describes a hypothetical machine that, when granted a few basic assumptions, can theoretically “compute any computable sequence.” This basically means it can solve any mathematical problem that uses only computable numbers. According to Turing’s definition, “a number is computable if its decimal can be written down by a machine.”")]),e._v(" "),a("p",[e._v("Turing called this device a “universal machine” but it is now better known as a “Turing machine.”")]),e._v(" "),a("p",[e._v("Turing machines are generally described in this way: Imagine a simple device that can read and write numbers. This device also has the ability to store data. (Turing assumes that the device has an infinitely large storage capacity, but this isn’t essential to understanding the concept of Turing completeness.)")]),e._v(" "),a("p",[e._v("Now, imagine that this simple machine moves from left to right along a thin, infinitely long piece of tape. It reads a number, decides what to do based on a series of instructions to which it is bound, and then executes the instructions accordingly.")]),e._v(" "),a("p",[e._v("In simply reading numbers, executing commands, and writing numbers, this simple machine can solve any computational sequence. It may take an arbitrarily long period of time but, theoretically, the machine would eventually solve the problem.")]),e._v(" "),a("p",[e._v("So what does all of this actually mean? Why is it important?")]),e._v(" "),a("p",[e._v("The idea of something being “Turing complete” is derived from this idea of a Turing machine. While we know that no machine has an infinitely large memory, we can use the basic theoretical framework to decide whether or not a machine can solve any computable sequence.")]),e._v(" "),a("p",[e._v("It is in this sense that computer languages are said to be Turing complete. A language is Turing complete if it can solve any mathematical problem made up of computable numbers.")]),e._v(" "),a("p",[e._v("As we noted above, Bitcoin Script is not Turing complete. This means that there are some problems and sequences that Bitcoin Script is not capable of solving.")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("This is where the gas-based smart contract platforms of Ethereum, EOS, NEO, and many other smart-contract platforms enter the picture. We will focus on Ethereum, as it is the originator of this model, and it is currently the most popular.")]),e._v(" "),a("p",[e._v("In December 2013, Vitalik Buterin released "),a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/White-Paper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum’s first white paper"),a("OutboundLink")],1),e._v(". One of the major contributions Ethereum offered was a Turing complete programming language, called Solidity, that can be used to write smart contracts.")]),e._v(" "),a("p",[e._v("In fact, Buterin makes this perfectly clear on the first page of the white paper:")]),e._v(" "),a("p",[e._v("“What Ethereum intends to provide is a blockchain with a built-in fully fledged Turing-complete programming language that can be used to create 'contracts' that can be used to encode arbitrary state transition functions, allowing users to create any of the systems described above, as well as many others that we have not yet imagined, simply by writing up the logic in a few lines of code.”")]),e._v(" "),a("p",[e._v("In many ways, Ethereum's 'smart-contract' language is an improvement over Bitcoin Script. It allows “systems which automatically move digital assets according to arbitrary pre-specified rules”, and this opened up a new world of possibilities for blockchain technology.")]),e._v(" "),a("p",[e._v("At the same time, Turing completeness creates a few vulnerabilities. Let’s discuss.")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Any Turing complete programming language has the ability to create “loops.” A loop just means that a certain operation or set of commands can be written once but commanded to execute an arbitrary number of times.")]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("While loops are beneficial in some ways, they also present vulnerabilities. A programmer may accidentally write an infinite loop into a smart contract, unnecessarily burdening the network with an infinite number of meaningless operations to perform.")]),e._v(" "),a("p",[e._v("If malicious spammers want to attack an unprepared network that runs on a Turing-complete language, they can unleash a great number of smart contracts each bearing infinite loops. These pointless, endless operations can cause crippling congestion.")]),e._v(" "),a("p",[e._v("To avoid this possibility, Buterin introduced the idea of “gas” to the Ethereum network.")]),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("In short, users must pay a fee for every single operation that they want the network’s nodes to perform. These fees are simply called “gas.” Gas prices discourage malicious actors from spamming the network. It also encourages developers to write efficient contracts that require as few processes as possible.")]),e._v(" "),a("p",[e._v("Moreover, gas prevents an accidental infinite loop from wreaking havoc on the network, because once all the gas is used up, the network stops processing the contract. The loop runs out of gas and the nodes stop executing the loop.")]),e._v(" "),a("p",[e._v("An important benefit the gas-based platform brought to the world is that it broke the barrier for allowing developers to decentralize software execution in a p2p environment.")]),e._v(" "),a("p",[e._v('For example, in a non-decentralized p2p software application, users typically must rely on a centralized server or other impersonal third-party to maintain sanity in the execution of software instructions. Decentralized applications, "dApps", allow users to interact with software while relying not on a centralized server, but on the decentralized blockchain.')]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("While the concept of gas is a clever innovation, it also makes complex applications prohibitively expensive, and it hinders innovation and audience growth.")]),e._v(" "),a("p",[e._v("If a particular contract or dApp needs the network to perform a large number of operations to function as designed, it costs too much money to keep it running.")]),e._v(" "),a("p",[e._v("Take these two competing statements from Buterin by way of illustration. In January of 2014 he said, “...Our goal is to provide a platform for decentralized applications – an android of the cryptocurrency world, where all efforts can share a common set of APIs, trustless interactions and no compromises.” "),a("a",{attrs:{href:"https://www.coindesk.com/vitalik-ethereum-app-builders-screwed-scaling-limits/",target:"_blank",rel:"noopener noreferrer"}},[e._v("But later, in July 2018, Buterin had this to say:"),a("OutboundLink")],1),e._v(" “If you want to build a decentralized Uber and Lyft on top of an unscalable Ethereum, you are screwed. Full stop.”")]),e._v(" "),a("p",[e._v("The \"Uber\" reference is to a popular phone app where users can hail and share a freelance-taxi service. On average, this app processes 12 financial transactions per second. At the time of Buterin's statement, Ethereum can process 15 transactions per second. Let's make a rough analysis of the cost to maintain this one dApp on Ethereum.")]),e._v(" "),a("p",[e._v("The value of the gas fees for an Uber-like decentralized app would have to cover ~80% of the cost of maintaining the Ethereum blockchain ("),a("code",[e._v("(12 txs / 15 txs) * 100 = 80%")]),e._v("). Currently, it costs about "),a("a",{attrs:{href:"http://www.crypto51.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("$150,000 USD per hour"),a("OutboundLink")],1),e._v(" to maintain the Ethereum hash rate. The dApp developer and their end-users would be responsible for 80% of this, so they would have to pay gas fees of at least $120,000 per hour, which translates to ~$30 per second.")]),e._v(" "),a("p",[e._v("Therefore, looking only at the costs, and not at the lack of space for multiple dApps, we begin to see the enormous flaws of the gas-based model. While existing large corporations and their customer bases may be able to afford this financial burn rate, it is difficult to conceive of a startup that can afford it. The ongoing gas fees to continually maintain the functionality of this dApp are simply too expensive.")]),e._v(" "),a("p",[e._v("All this is assuming that the dApp only processes one transaction per ride, per customer. If the dApp is instead a game that has a looping function, the gas fees can grow even more absurd.")]),e._v(" "),a("p",[e._v("Furthermore, all dApps on the Ethereum platform have to share the same gas, and the same blockchain, and this compounds the problem. If an existing business running a dApp on the platform becomes suddenly popular, the surge of people wanting to use the dApp must purchase gas, and this causes the price of gas to rapidly rise. The burst of activity can also cause the blockchain to grind to a halt.")]),e._v(" "),a("p",[e._v("While the spike in the price of gas can be advantageous for financial speculation, it is arguably terrible for everything else. For example, a startup business that wants to serve a new customer base using the same gas-based platform must now convince their potential customers to purchase the platform's gas at an unpredictably high price.")]),e._v(" "),a("p",[e._v("Until blockchain technology is capable of processing potentially billions, if not trillions, of transactions per second on a single blockchain, the gas-based blockchain platform is fundamentally flawed for today's market. The more popular a gas-based platform becomes, the more difficult, expensive, and prohibitive it is for businesses to develop on it, and for users to buy into it.")]),e._v(" "),a("p",[e._v("Having observed crucial flaws in the currently popular gas-based smart-contract platform, we are now prepared to turn to the smart-contract solution Komodo proposes.")]),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("Recall that Satoshi Nakamoto's Bitcoin Script is not Turing complete. This choice was deliberate. Leaving Bitcoin Script in a simple form was a quicker, safer alternative to a Turing complete language. This is true because it removes the possibility of infinite loops clogging the Bitcoin network.")]),e._v(" "),a("p",[e._v("However, at the same time, the lack of Turing completeness also prevented smart contracts and dApps from being launched on Bitcoin-protocol based blockchains--until now.")]),e._v(" "),a("p",[e._v('Komodo now offers "Crypto Conditions", a feature that allows smart contracts to be developed on top of Bitcoin-protocol based blockchains. We believe Crypto Conditions to be a useful addition to the blockchain industry, because it empowers Bitcoin-core based cryptocurrencies with support for smart contracts and decentralized applications.')]),e._v(" "),a("p",[e._v("Furthermore, Crypto Conditions gains more usefulness when combined with Komodo's unique design. Recall that Komodo is built not to require all developers and users to function on the main Komodo blockchain. Rather, it empowers you with an independent blockchain all of your own, secures each chain with the hash rate of Bitcoin, and facilitates an interconnected network between all such chains using technologies such as atomic-swaps, cross-chain smart contracts, chain interlinking, and more.")]),e._v(" "),a("p",[e._v("This combination of Komodo technologies overcomes the challenges of the currently popular, gas-based, single-blockchain platforms.")]),e._v(" "),a("p",[e._v("With Crypto Conditions, the business developer can maintain interactivity with the Komodo ecosystem, while also being able to run their smart contracts and dApps on a private blockchain. Because the developer has the full blockchain all to themselves, they are able to safely occupy the full transaction capacity without fear of interruption by other dApp developers in the ecosystem. Developers of highly active blockchains can even split their single blockchain into multiple blockchains, using the same interconnection technology.")]),e._v(" "),a("p",[e._v("In short, if you want to build an Uber-like dApp, Komodo is the platform for you.")]),e._v(" "),a("p",[e._v("Likewise, to participate the end-users need only purchase the currency of the developer's dApp; there is no need to purchase KMD. Therefore, for the end-user, the price of participating in the developer's dApp is tied only to the design and success of the dApp, and not to the unpredictability of the rest of the ecosystem.")]),e._v(" "),e._m(10),e._v(" "),a("p",[e._v('Crypto Conditions functions in a completely different manner from the popular gas-based model of other platforms. Before we can explain how Crypto Conditions works, we must first briefly explain the concept of an "unspent transaction", also called a "utxo," for short. Utxos are integral to a blockchain\'s functionality, but many users do not know they exist.')]),e._v(" "),a("p",[e._v("A utxo is simply a bill of value sitting in your digital wallet -- much like the many small fiat dollar bills you may have sitting in your physical wallet. The collection of utxos in your digital wallet make up the total balance.")]),e._v(" "),a("p",[e._v("For example, a user could have in their digital wallet a utxo worth 1 KMD, another utxo worth 2 KMD, and another worth 7 KMD. Altogether, in the software GUI the user would see that they have 10 KMD total. Most users would never know that they actually have three separate utxos that make up the full balance, as utxos are typically managed automatically by blockchain software.")]),e._v(" "),a("p",[e._v('When the user spends money, the blockchain software automatically splits the money they spend into new utxos. If our user desires to spend 6 KMD, the software splits the 7 KMD utxo into two pieces: a 6 KMD utxo is sent to the destination address, as the user instructed, and the remaining 1 KMD is returned to the user as "change."')]),e._v(" "),a("p",[e._v("The user now has a 1 KMD utxo, a 2 KMD utxo, and another 1 KMD utxo. The total that they see in their wallet is 4 KMD.")]),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("Coming to this from a programmer's perspective, a utxo is a programmable object. As with many objects, it allows software to add and subtract properties from it, including properties that allow for Turing-complete programming. In Komodo, utxos allow us to create a smart-contract functionality that is dramatically cheaper to utilize, and more secure in practice; than the gas-based models of the other platforms.")]),e._v(" "),a("p",[e._v("In its simplest form, Crypto Conditions locks a utxo in a publicly-known address and prevents it from being spent until a certain set of conditions is met. Once the conditions are fulfilled, the utxo is unlocked and sent to the appropriate address. The idea behind it really is that simple.")]),e._v(" "),a("p",[e._v("It is fundamentally different than the gas-based model. In the gas-based model, a user has a total balance and they instruct their blockchain software to execute a smart-contract either until the contract is complete, or their total balance is gone.")]),e._v(" "),a("p",[e._v("With Komodo's Crypto Conditions, a user locks a series of utxos in a contract with a set of instructions that must be met before the utxo can be sent to its final destination.")]),e._v(" "),a("p",[e._v("This is a dramatically more secure setup. Only the utxos that have been indicated as belonging to a smart contract can be spent. This is different from the gas-based model, where a bug in the software can (and frequently does) allow a faulty smart contract to drain the full balance of a wallet.")]),e._v(" "),a("p",[e._v("Before diving any deeper into how Crypto Conditions works, we need to understand a few things about Bitcoin payments scripts.")]),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("Let's dive even deeper. The following terminology may be a little thick even for some developers, when you are new to blockchain technology. If it's too confusing, simply skip to the next section.")]),e._v(" "),a("p",[e._v("There are several different ways to execute a Bitcoin payment. In particular, there are Pay-To-Pubkey payments, Pay-To-Pubkey-Hash payments, and Pay-to-Script-Hash payments.")]),e._v(" "),a("p",[e._v("Now, Komodo has created an additional payment script that designates a utxo as belonging to a specific smart contract. In other words, it puts constraints on the utxo.")]),e._v(" "),a("p",[e._v("The utxo in question gets marked with a specific EVAL code. This will effectively lock those funds into the desired smart contract. Every Crypto Conditions contract has its own unique EVAL code, so there is never any confusion about which contract a utxo is entering.")]),e._v(" "),a("p",[e._v("There is also never any confusion about where the funds are sent because for each pubkey in existence, there is a unique address for each EVAL code. The pubkey remains the same, but due to the actual script having different EVAL codes, it ends up with a different result when entered into a cryptographic hash function, and thus a different address for each contract.")]),e._v(" "),a("p",[e._v("Each Crypto Conditions contract has its own special address that is known to all, including its private key. Making the private key public enables SPV-based interaction with the contracts. It also allows everyone to see that a specific sum of funds are locked in a contract.")]),e._v(" "),a("p",[e._v("At the same time, the funds cannot be moved until all the conditions of the contract are satisfied. This is true despite the fact that the private key is made public. Although anyone can use the private key to sign a transaction, the contract’s conditions must be satisfied before the funds can be moved.")]),e._v(" "),a("p",[e._v("For all of these reasons, the private key is no longer the relevant factor for control of the funds. The relevant factor is the set of conditions set forth by the contract. And, as we’ll soon learn, the conditions of a Crypto Conditions smart contract are essentially boundless.")]),e._v(" "),a("p",[e._v("It’s also worth pointing out that one of the conditions of a Crypto Conditions contract can be a restriction on which addresses the funds can be sent to.")]),e._v(" "),a("p",[e._v("With these rules in place, a Crypto Conditions smart contract becomes like a mini-consensus mechanism. It forces consensus for the participants in the smart contract, just like the master consensus mechanism of the blockchain.")]),e._v(" "),a("p",[e._v("If you'd like to try writing your own Crypto Conditions smart contract, "),a("a",{attrs:{href:"https://docs.komodoplatform.com/cc/index-book-jl.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("read this documentation by Komodo’s lead developer, JL777"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Rest assured if you find this documentation too challenging. As the library of finished smart-contract templates increases over time, a normal developer will not need to write a full smart contract to utilize Komodo. Rather, you'll just pull a series of pre-written templates that function like building blocks, as you create your dApps.")]),e._v(" "),a("p",[e._v("If you have a specific idea you'd like to try out and the template does not yet exist for it, please reach out to our team. We may be able to help you, as we are working to build up our template library.")]),e._v(" "),a("p",[e._v("Now let's take a closer look at the many advantages Crypto Conditions creates.")]),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("There are a few additional advantages of utxo-based smart contracts that must be emphasized.")]),e._v(" "),a("p",[e._v("First, these smart contracts are hard-coded into the Komodo code base, which means they can be written in C and C++. They can also be written in any compiled programming language that can create a linkable library capable of calling and being called by C/C++ functions. In that sense, Komodo’s utxo-based smart contracts are language agnostic.")]),e._v(" "),a("p",[e._v("The C and C++ programming languages are widely understood, time-tested, and, perhaps most importantly, Turing complete. Thus, utxo-based smart contracts can be programmed to do anything that any other existing program or application is able to do.")]),e._v(" "),a("p",[e._v("Furthermore, because smart contracts on Komodo run in the daemon, developers can avoid the limitations and hassles of having to run code in a virtual machine, as is the case with the many gas-based smart contract platforms. On Komodo, you have far more speed, flexibility, and power. This is made possible by our unique design of connecting independent blockchains together, rather than forcing all users to run on a layer-one main chain.")]),e._v(" "),a("p",[e._v("Second, utxo-based smart contracts are more secure than balance-based smart contracts. This is true in several ways. For one thing, because Komodo’s smart contracts are utxo-based, it is far more difficult, if not impossible, to use a smart contract to flood the parent coin's coin supply with illegitimate coins.")]),e._v(" "),a("p",[e._v("This is not the case with balance-based smart contracts, like those on Ethereum. Because the smart contracts are linked to balances, rather than blockchain-enforced utxos, a malicious actor can manipulate balances to disastrous ends. We’ve seen this happen again and again and again.")]),e._v(" "),a("p",[e._v("Third, utxo-based smart contracts are essentially an extension of the Bitcoin protocol, so a series of RPC calls can be established. This makes it extremely simple to customize and implement utxo-based smart contracts.")]),e._v(" "),a("p",[e._v("It is a straightforward process to create a GUI so non-technical users can make use of Komodo’s smart-contract technology without needing to work through a CLI. Eventually, once a large variety of RPC calls have been created, it will become possible to build entire decentralized applications based on RPC calls alone.")]),e._v(" "),a("p",[e._v("Fourth, Crypto Conditions allows zero-confirmation micro-payments. Also, these 0-conf micro-payments are secured by Komodo’s delayed Proof of Work security mechanism. The payments are fully peer-to-peer, and are considered confirmed as soon as they enter the mempool.")]),e._v(" "),a("p",[e._v("Finally, utxo-based smart contracts do not require “gas” or any sort of fee for every process executed. Recall that the smart contracts and dApps built on Ethereum must pay for gas for every single process. The gas-based model makes complex dApps impossible.")]),e._v(" "),a("p",[e._v("Komodo, on the other hand, is far more scalable and will not require a fee for every single process, other than a single, ordinary transaction fee for sending funds. This fee is not paid in KMD, but in the coin of the developer and user's choice.")]),e._v(" "),a("p",[e._v("Komodo is exhaustively testing the code for all smart contracts prior to implementation, to ensure quality and bug-free contracts.")]),e._v(" "),a("p",[e._v("Then the contracts are embedded into the Komodo daemon. This prevents alterations, while also making the code publicly visible. Anyone can verify the code of the contracts to see that they do exactly what they claim.")]),e._v(" "),a("p",[e._v("If a project within the Komodo ecosystem would like to use a contract that isn’t already in the code base, they can submit a Pull Request to the Komodo repository on Github. If accepted, Komodo will write the contract and make it available for all asset chains at our next hard fork (Komodo is designed to make hard-forking easy, and does so once or twice per year).")]),e._v(" "),a("p",[e._v("If a project on the Komodo Platform needs additional contracts urgently and has the required technical skills, they can simply fork the Komodo codebase, add the new contracts, and spawn their chain.")]),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("As far as the Komodo team knows, no other blockchain project has successfully implemented Crypto Conditions on a live chain. From atomic swaps and on-demand scalability features to cross-chain interoperability syncing and utxo-based smart contracts, Komodo continues to develop technologies at the bleeding edge of the blockchain industry.")]),e._v(" "),a("p",[e._v("Komodo has implemented several smart contracts already, and they are available to all asset chains in our ecosystem. Some of these smart contracts can facilitate Oracles, on-chain gambling, on-chain DEX functionality, ERC20-like tokens, micro-payment channels, and more.")]),e._v(" "),a("p",[e._v("To learn more about utxo-based smart contracts, "),a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("join the #crypto-conditions channel in Komodo’s community on Discord"),a("OutboundLink")],1),e._v(". "),a("a",{attrs:{href:"https://komodoplatform.com/newsletter",target:"_blank",rel:"noopener noreferrer"}},[e._v("You can also sign up for the weekly newsletter to get regular updates about Komodo’s developments"),a("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"crypto-conditions-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crypto-conditions-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Crypto Conditions Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"smart-contracts-on-the-komodo-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts-on-the-komodo-platform","aria-hidden":"true"}},[this._v("#")]),this._v(" Smart Contracts on the Komodo Platform")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"a-brief-review-of-bitcoin-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-review-of-bitcoin-script","aria-hidden":"true"}},[this._v("#")]),this._v(" A Brief Review of Bitcoin Script")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"turing-completeness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#turing-completeness","aria-hidden":"true"}},[this._v("#")]),this._v(" Turing Completeness")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"gas-based-smart-contract-platforms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gas-based-smart-contract-platforms","aria-hidden":"true"}},[this._v("#")]),this._v(" Gas-based Smart Contract Platforms")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pros-and-cons-of-turing-completeness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pros-and-cons-of-turing-completeness","aria-hidden":"true"}},[this._v("#")]),this._v(" Pros and Cons of Turing Completeness")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In a language that is not Turing complete, like Bitcoin Script, loops are not available. A programmer needs to copy and paste the same piece of code "),t("code",[this._v("X")]),this._v(" number of times when he wants a computer to execute the operation "),t("code",[this._v("X")]),this._v(" times.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"gas-a-way-to-avoid-infinite-loops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gas-a-way-to-avoid-infinite-loops","aria-hidden":"true"}},[this._v("#")]),this._v(" Gas: A Way to Avoid Infinite Loops")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-problem-with-the-gas-based-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-problem-with-the-gas-based-model","aria-hidden":"true"}},[this._v("#")]),this._v(" The Problem with the Gas-based Model")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introducing-crypto-conditions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introducing-crypto-conditions","aria-hidden":"true"}},[this._v("#")]),this._v(" Introducing Crypto Conditions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"crypto-conditions-is-utxo-technology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crypto-conditions-is-utxo-technology","aria-hidden":"true"}},[this._v("#")]),this._v(" Crypto Conditions is Utxo Technology")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"crypto-conditions-utxo-based-smart-contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crypto-conditions-utxo-based-smart-contracts","aria-hidden":"true"}},[this._v("#")]),this._v(" Crypto Conditions: Utxo-based Smart Contracts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-crypto-conditions-interacts-with-bitcoin-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-crypto-conditions-interacts-with-bitcoin-script","aria-hidden":"true"}},[this._v("#")]),this._v(" How Crypto Conditions Interacts with Bitcoin Script")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"advantages-of-crypto-conditions-utxo-based-smart-contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advantages-of-crypto-conditions-utxo-based-smart-contracts","aria-hidden":"true"}},[this._v("#")]),this._v(" Advantages Of Crypto Conditions & Utxo-based Smart Contracts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])}],!1,null,null,null);n.options.__file="cc-overview.md";t.default=n.exports}}]);