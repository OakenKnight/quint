module base {
  /// A hop is a step taken by a token sent from one chain to another. In this
  /// spec, we only care about one element of the hop (sometimes the source
  /// chain, sometimes the destination chain). A `HopElement` is a representation
  /// of either the source or the destination chain of a hop.
  type HopElement = {
    port: str,
    channel: str,
  }

  /// A denomination trace is a representation of the original denomination
  /// (also: base denomination) and all the hops it has done to get where it is.
  /// For every token transfer, ICS-020 either adds or removes one hop from the
  /// list. In the implementation, a `DenomTrace` is represented as a string of
  /// the form
  /// `{ics20Port_n}/{ics20Channel_n}/.../{ics20Port_1}/{ics20Channel_1}/{baseDenom}`,
  /// where `ics20Port_i` and `ics20Channel_i` are the destination port and
  /// channel of the i-th hop. A token transfer then means adding or dropping a
  /// prefix.
  type DenomTrace = {
    path: List[HopElement],
    baseDenom: str,
  }

  type UINT256 = int
  type Address = str

  type Channel = str
  /// Map from channel name in a chain to its counterparty on other chain
  type Channels = Channel -> Channel

  pure def toDenom(baseDenom: str): DenomTrace = {
    { baseDenom: baseDenom, path: [] }
  }
}