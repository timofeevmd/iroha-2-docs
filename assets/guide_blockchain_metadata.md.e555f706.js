import{_ as n,o as e,c as l,I as o,V as s,J as p}from"./chunks/framework.7726510e.js";const u=JSON.parse('{"title":"Metadata","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/metadata.md","lastUpdated":1684147028000}'),t={name:"guide/blockchain/metadata.md"},c=s('<h1 id="metadata" tabindex="-1">Metadata <a class="header-anchor" href="#metadata" aria-label="Permalink to &quot;Metadata&quot;">​</a></h1><p>Metadata are key-value pairs that are attached to objects in the blockchain. The following can contain metadata:</p><ul><li>domains</li><li>accounts</li><li>assets</li><li>asset definitions</li><li>triggers</li><li>transactions</li></ul><p>The metadata can be of very different types, such as:</p><ul><li>structures with named or unnamed fields</li><li>enums</li><li>integers</li><li>numbers with fixed decimal precision</li><li>strings</li><li>Boolean values</li><li>arrays</li><li>associative arrays</li><li>vectors</li><li>request results</li></ul><p>The object&#39;s metadata can be transferred one by one, or in bulk via a <a href="/iroha-2-docs/guide/blockchain/wasm.html">WASM</a> transaction. The <code>Store</code> asset type is used for working with metadata. Let&#39;s take a closer look at this asset type.</p><h2 id="metadatachanged" tabindex="-1"><code>MetadataChanged</code> <a class="header-anchor" href="#metadatachanged" aria-label="Permalink to &quot;`MetadataChanged`&quot;">​</a></h2><p><code>MetadataInserted</code> or <code>MetadataRemoved</code> events are emitted when metadata is inserted or removed from accounts, domains, assets, or asset definitions. The emitted event also contains the data that was inserted or removed from the object. This data is stored in <code>MetadataChanged</code> in the form of a <code>(key, value)</code> pair.</p>',8),r=s(`<p>Check <a href="./filters.html#data-filters">data filters</a> for details.</p><h2 id="store-asset" tabindex="-1"><code>Store</code> Asset <a class="header-anchor" href="#store-asset" aria-label="Permalink to &quot;\`Store\` Asset&quot;">​</a></h2><p>In Iroha 2 there is an asset called <code>Store</code> that was designed to be a package of data. You can use <code>Store</code> when you require a storage of key-value pairs. The <code>SetKeyValue</code> and <code>RemoveKeyValue</code> instructions are used with the <code>Store</code> asset type. Here is an example of <code>SetKeyValue</code> instruction:</p><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#768390;">// Mouse&#39;s account</span></span>
<span class="line"><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> mouse_id</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">Account</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">as</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Identifiable</span><span style="color:#ADBAC7;">&gt;</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">Id</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;mouse@wonderland&quot;</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">parse</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Registering \`Store\` asset definition</span></span>
<span class="line"><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> hat_definition_id</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">AssetDefinition</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">as</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Identifiable</span><span style="color:#ADBAC7;">&gt;</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">Id</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#96D0FF;">&quot;hat#wonderland&quot;</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">parse</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> new_hat_definition </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">AssetDefinition</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">store</span><span style="color:#ADBAC7;">(hat_definition_id);</span></span>
<span class="line"><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> register_hat </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">RegisterBox</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(new_hat_definition);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> mouse_hat_id </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">Asset</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">as</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Identifiable</span><span style="color:#ADBAC7;">&gt;</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">Id</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(hat_definition_id, mouse_id);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// New Iroha Special Instruction for setting key-value pairs for Mouse&#39;s hats:</span></span>
<span class="line"><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> set_hat_color </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SetKeyValueBox</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">    mouse_hat_id,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">Name</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">from_str</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;color&quot;</span><span style="color:#ADBAC7;">),</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#96D0FF;">&quot;yellow&quot;</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">to_owned</span><span style="color:#ADBAC7;">(),</span></span>
<span class="line"><span style="color:#ADBAC7;">);</span></span></code></pre></div><h2 id="working-with-metadata" tabindex="-1">Working with metadata <a class="header-anchor" href="#working-with-metadata" aria-label="Permalink to &quot;Working with metadata&quot;">​</a></h2><p>The following example showcases how to register and grant a <a href="/iroha-2-docs/guide/blockchain/permissions.html#permission-groups-roles">role</a> to access another account&#39;s metadata.</p><details class="details custom-block"><summary>Example</summary><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#ADBAC7;">#[test]</span></span>
<span class="line"><span style="color:#F47067;">fn</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">register_and_grant_role_for_metadata_access</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;">&lt;()&gt; {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> (_rt, _peer, test_client) </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">PeerBuilder</span><span style="color:#ADBAC7;">&gt;</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">start_with_runtime</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">wait_for_genesis_committed</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">&amp;</span><span style="color:#DCBDFB;">vec!</span><span style="color:#ADBAC7;">[test_client</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">()], </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> alice_id </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">Account</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">as</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Identifiable</span><span style="color:#ADBAC7;">&gt;</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">Id</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">from_str</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;alice@wonderland&quot;</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> mouse_id </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">Account</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">as</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Identifiable</span><span style="color:#ADBAC7;">&gt;</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">Id</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">from_str</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;mouse@wonderland&quot;</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    // Registering Mouse</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> mouse_key_pair </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">KeyPair</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">generate</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> register_mouse </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">RegisterBox</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">Account</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">        mouse_id</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">(),</span></span>
<span class="line"><span style="color:#ADBAC7;">        [mouse_key_pair</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">public_key</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">()],</span></span>
<span class="line"><span style="color:#ADBAC7;">    ));</span></span>
<span class="line"><span style="color:#ADBAC7;">    test_client</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">submit_blocking</span><span style="color:#ADBAC7;">(register_mouse)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    // Registering role</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> role_id </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">Role</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">as</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Identifiable</span><span style="color:#ADBAC7;">&gt;</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">Id</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">from_str</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;ACCESS_TO_MOUSE_METADATA&quot;</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> role </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">iroha_data_model</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">role</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">Role</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(role_id</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">())</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">add_permission</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CanSetKeyValueInUserMetadata</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(mouse_id</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">()))</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">add_permission</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">CanRemoveKeyValueInUserMetadata</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(mouse_id</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">()));</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> register_role </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">RegisterBox</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(role);</span></span>
<span class="line"><span style="color:#ADBAC7;">    test_client</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">submit_blocking</span><span style="color:#ADBAC7;">(register_role)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    // Mouse grants role to Alice</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> grant_role </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GrantBox</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(role_id</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">(), alice_id</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">());</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> grant_role_tx </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Transaction</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(mouse_id</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">clone</span><span style="color:#ADBAC7;">(), </span><span style="color:#DCBDFB;">vec!</span><span style="color:#ADBAC7;">[grant_role</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">into</span><span style="color:#ADBAC7;">()]</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">into</span><span style="color:#ADBAC7;">(), </span><span style="color:#6CB6FF;">100_000</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">sign</span><span style="color:#ADBAC7;">(mouse_key_pair)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    test_client</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">submit_transaction_blocking</span><span style="color:#ADBAC7;">(grant_role_tx)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    // Alice modifies Mouse&#39;s metadata</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> set_key_value </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SetKeyValueBox</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">new</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">        mouse_id,</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">Name</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">from_str</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;key&quot;</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">expect</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;Valid&quot;</span><span style="color:#ADBAC7;">),</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">Value</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">String</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;value&quot;</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">to_owned</span><span style="color:#ADBAC7;">()),</span></span>
<span class="line"><span style="color:#ADBAC7;">    );</span></span>
<span class="line"><span style="color:#ADBAC7;">    test_client</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">submit_blocking</span><span style="color:#ADBAC7;">(set_key_value)</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    // Making request to find Alice&#39;s roles</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">let</span><span style="color:#ADBAC7;"> found_role_ids </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> test_client</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">request</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">client</span><span style="color:#F47067;">::</span><span style="color:#F69D50;">role</span><span style="color:#F47067;">::</span><span style="color:#DCBDFB;">by_account_id</span><span style="color:#ADBAC7;">(alice_id))</span><span style="color:#F47067;">?</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">assert!</span><span style="color:#ADBAC7;">(found_role_ids</span><span style="color:#F47067;">.</span><span style="color:#DCBDFB;">contains</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">&amp;</span><span style="color:#ADBAC7;">role_id));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">Ok</span><span style="color:#ADBAC7;">(())</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre></div></details><h2 id="queries" tabindex="-1">Queries <a class="header-anchor" href="#queries" aria-label="Permalink to &quot;Queries&quot;">​</a></h2><p>You can get the key value of an object metadata using <a href="/iroha-2-docs/guide/blockchain/queries.html">queries</a>:</p><ul><li><a href="/iroha-2-docs/guide/blockchain/queries.html#findaccountkeyvaluebyidandkey"><code>FindAccountKeyValueByIdAndKey</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/queries.html#findassetkeyvaluebyidandkey"><code>FindAssetKeyValueByIdAndKey</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/queries.html#findassetdefinitionkeyvaluebyidandkey"><code>FindAssetDefinitionKeyValueByIdAndKey</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/queries.html#finddomainkeyvaluebyidandkey"><code>FindDomainKeyValueByIdAndKey</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/queries.html#findtriggerkeyvaluebyidandkey"><code>FindTriggerKeyValueByIdAndKey</code></a></li></ul><h2 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions&quot;">​</a></h2><p>Pre-configured tokens in Iroha 2 LTS version that allow to set or remove key-values in accounts, assets, or asset definitions:</p><ul><li><a href="/iroha-2-docs/guide/blockchain/permissions.html#cansetkeyvalueinusermetadata"><code>CanSetKeyValueInUserMetadata</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/permissions.html#canremovekeyvalueinusermetadata"><code>CanRemoveKeyValueInUserMetadata</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/permissions.html#cansetkeyvalueinuserassets"><code>CanSetKeyValueInUserAssets</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/permissions.html#canremovekeyvalueinuserassets"><code>CanRemoveKeyValueInUserAssets</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/permissions.html#cansetkeyvalueinassetdefinition"><code>CanSetKeyValueInAssetDefinition</code></a></li><li><a href="/iroha-2-docs/guide/blockchain/permissions.html#canremovekeyvalueinassetdefinition"><code>CanRemoveKeyValueInAssetDefinition</code></a></li></ul>`,13);function i(y,A,d,D,B,C){const a=p("MermaidRenderWrap");return e(),l("div",null,[c,o(a,{id:"mermaid_2d3f0b7624b6a36380f036629a9452425dc05d6c4a61988862ccf28002cdef5ae656eb9b068819f89cb73fb8fd390d7e0965c8b8866f9ed83002216af5c6db75",text:"classDiagram%0A%0Adirection%20LR%0A%0Aclass%20MetadataChanged~ID~%20%7B%0A%20%20%20%20target_id%3A%20ID%0A%20%20%20%20key%3A%20Name%0A%20%20%20%20value%3A%20Box~Value~%0A%7D%0A%0Aclass%20AccountMetadataChanged~AccountId~%0Aclass%20AssetMetadataChanged~AssetId~%0Aclass%20AssetDefinitionMetadataChanged~AssetDefinitionId~%0Aclass%20DomainMetadataChanged~DomainId~%0A%0AMetadataChanged%20--%3E%20AccountMetadataChanged%0AMetadataChanged%20--%3E%20AssetMetadataChanged%0AMetadataChanged%20--%3E%20AssetDefinitionMetadataChanged%0AMetadataChanged%20--%3E%20DomainMetadataChanged"}),r])}const h=n(t,[["render",i]]);export{u as __pageData,h as default};
