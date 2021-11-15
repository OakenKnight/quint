// Generated from ./src/generated/Tnt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TntListener } from "./TntListener";
import { TntVisitor } from "./TntVisitor";


export class TntParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly STRING = 31;
	public static readonly BOOL = 32;
	public static readonly INT = 33;
	public static readonly AND = 34;
	public static readonly OR = 35;
	public static readonly IFF = 36;
	public static readonly IMPLIES = 37;
	public static readonly SUBSETEQ = 38;
	public static readonly IN = 39;
	public static readonly NOTIN = 40;
	public static readonly SET = 41;
	public static readonly SEQ = 42;
	public static readonly PLUS = 43;
	public static readonly MINUS = 44;
	public static readonly MUL = 45;
	public static readonly DIV = 46;
	public static readonly MOD = 47;
	public static readonly GT = 48;
	public static readonly LT = 49;
	public static readonly GE = 50;
	public static readonly LE = 51;
	public static readonly NE = 52;
	public static readonly EQ = 53;
	public static readonly ASGN = 54;
	public static readonly LPAREN = 55;
	public static readonly RPAREN = 56;
	public static readonly IDENTIFIER = 57;
	public static readonly LINE_COMMENT = 58;
	public static readonly COMMENT = 59;
	public static readonly WS = 60;
	public static readonly RULE_module = 0;
	public static readonly RULE_unit = 1;
	public static readonly RULE_operDef = 2;
	public static readonly RULE_params = 3;
	public static readonly RULE_instanceMod = 4;
	public static readonly RULE_type = 5;
	public static readonly RULE_typeUnionRecOne = 6;
	public static readonly RULE_expr = 7;
	public static readonly RULE_lambda = 8;
	public static readonly RULE_identOrHole = 9;
	public static readonly RULE_identOrStar = 10;
	public static readonly RULE_path = 11;
	public static readonly RULE_lambdaOrExpr = 12;
	public static readonly RULE_argList = 13;
	public static readonly RULE_normalCallName = 14;
	public static readonly RULE_nameAfterDot = 15;
	public static readonly RULE_operator = 16;
	public static readonly RULE_literal = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"module", "unit", "operDef", "params", "instanceMod", "type", "typeUnionRecOne", 
		"expr", "lambda", "identOrHole", "identOrStar", "path", "lambdaOrExpr", 
		"argList", "normalCallName", "nameAfterDot", "operator", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'{'", "'}'", "'const'", "':'", "'var'", "'assume'", 
		"'='", "'type'", "'import'", "'.'", "'val'", "'def'", "'pred'", "'action'", 
		"'temporal'", "','", "'->'", "'=>'", "'int'", "'str'", "'bool'", "'|'", 
		"'['", "']'", "'^'", "'if'", "'else'", "'&'", "'_'", undefined, undefined, 
		undefined, "'and'", "'or'", "'iff'", "'implies'", "'subseteq'", "'in'", 
		"'notin'", "'set'", "'seq'", "'+'", "'-'", "'*'", "'/'", "'%'", "'>'", 
		"'<'", "'>='", "'<='", "'!='", "'=='", "'<-'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "STRING", "BOOL", "INT", "AND", "OR", 
		"IFF", "IMPLIES", "SUBSETEQ", "IN", "NOTIN", "SET", "SEQ", "PLUS", "MINUS", 
		"MUL", "DIV", "MOD", "GT", "LT", "GE", "LE", "NE", "EQ", "ASGN", "LPAREN", 
		"RPAREN", "IDENTIFIER", "LINE_COMMENT", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TntParser._LITERAL_NAMES, TntParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TntParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Tnt.g4"; }

	// @Override
	public get ruleNames(): string[] { return TntParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TntParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TntParser._ATN, this);
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TntParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(TntParser.T__0);
			this.state = 37;
			this.match(TntParser.IDENTIFIER);
			this.state = 38;
			this.match(TntParser.T__1);
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__0) | (1 << TntParser.T__3) | (1 << TntParser.T__5) | (1 << TntParser.T__6) | (1 << TntParser.T__8) | (1 << TntParser.T__9) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15))) !== 0)) {
				{
				{
				this.state = 39;
				this.unit();
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 45;
			this.match(TntParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TntParser.RULE_unit);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new ConstContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.match(TntParser.T__3);
				this.state = 48;
				this.match(TntParser.IDENTIFIER);
				this.state = 49;
				this.match(TntParser.T__4);
				this.state = 50;
				this.type(0);
				}
				break;

			case 2:
				_localctx = new VarContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.match(TntParser.T__5);
				this.state = 52;
				this.match(TntParser.IDENTIFIER);
				this.state = 53;
				this.match(TntParser.T__4);
				this.state = 54;
				this.type(0);
				}
				break;

			case 3:
				_localctx = new AssumeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 55;
				this.match(TntParser.T__6);
				this.state = 56;
				this.identOrHole();
				this.state = 57;
				this.match(TntParser.T__7);
				this.state = 58;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new OperContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 60;
				this.operDef();
				}
				break;

			case 5:
				_localctx = new ModuleNestedContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 61;
				this.module();
				}
				break;

			case 6:
				_localctx = new InstanceContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 62;
				this.instanceMod();
				}
				break;

			case 7:
				_localctx = new TypedefContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 63;
				this.match(TntParser.T__8);
				this.state = 64;
				this.match(TntParser.IDENTIFIER);
				this.state = 65;
				this.match(TntParser.T__7);
				this.state = 66;
				this.type(0);
				}
				break;

			case 8:
				_localctx = new ImportDefContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 67;
				this.match(TntParser.T__9);
				this.state = 68;
				this.path();
				this.state = 69;
				this.match(TntParser.T__10);
				this.state = 70;
				this.identOrStar();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operDef(): OperDefContext {
		let _localctx: OperDefContext = new OperDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TntParser.RULE_operDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			_localctx._qualifier = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15))) !== 0))) {
				_localctx._qualifier = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 75;
			this.match(TntParser.IDENTIFIER);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.LPAREN) {
				{
				this.state = 76;
				this.params();
				}
			}

			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.T__4) {
				{
				this.state = 79;
				this.match(TntParser.T__4);
				this.state = 80;
				this.type(0);
				}
			}

			this.state = 83;
			this.match(TntParser.T__7);
			this.state = 84;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TntParser.RULE_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(TntParser.LPAREN);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TntParser.IDENTIFIER) {
				{
				this.state = 87;
				this.match(TntParser.IDENTIFIER);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 88;
					this.match(TntParser.T__16);
					this.state = 89;
					this.match(TntParser.IDENTIFIER);
					}
					}
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 97;
			this.match(TntParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceMod(): InstanceModContext {
		let _localctx: InstanceModContext = new InstanceModContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TntParser.RULE_instanceMod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(TntParser.T__0);
			this.state = 100;
			this.match(TntParser.IDENTIFIER);
			this.state = 101;
			this.match(TntParser.T__7);
			this.state = 102;
			this.match(TntParser.IDENTIFIER);
			this.state = 103;
			this.match(TntParser.LPAREN);
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.MUL:
				{
				this.state = 104;
				this.match(TntParser.MUL);
				}
				break;
			case TntParser.IDENTIFIER:
				{
				this.state = 105;
				this.match(TntParser.IDENTIFIER);
				this.state = 106;
				this.match(TntParser.T__7);
				this.state = 107;
				this.expr(0);
				this.state = 114;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 108;
						this.match(TntParser.T__16);
						this.state = 109;
						this.match(TntParser.IDENTIFIER);
						this.state = 110;
						this.match(TntParser.T__7);
						this.state = 111;
						this.expr(0);
						}
						}
					}
					this.state = 116;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__16) {
					{
					this.state = 117;
					this.match(TntParser.T__16);
					this.state = 118;
					this.match(TntParser.MUL);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 123;
			this.match(TntParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, TntParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				_localctx = new TypeOperContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 126;
				this.match(TntParser.LPAREN);
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__19) | (1 << TntParser.T__20) | (1 << TntParser.T__21) | (1 << TntParser.T__22))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (TntParser.SET - 41)) | (1 << (TntParser.SEQ - 41)) | (1 << (TntParser.LPAREN - 41)) | (1 << (TntParser.IDENTIFIER - 41)))) !== 0)) {
					{
					this.state = 127;
					this.type(0);
					this.state = 132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TntParser.T__16) {
						{
						{
						this.state = 128;
						this.match(TntParser.T__16);
						this.state = 129;
						this.type(0);
						}
						}
						this.state = 134;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 137;
				this.match(TntParser.RPAREN);
				this.state = 138;
				this.match(TntParser.T__18);
				this.state = 139;
				this.type(11);
				}
				break;

			case 2:
				{
				_localctx = new TypeSetContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(TntParser.SET);
				this.state = 141;
				this.match(TntParser.LPAREN);
				this.state = 142;
				this.type(0);
				this.state = 143;
				this.match(TntParser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new TypeSeqContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.match(TntParser.SEQ);
				this.state = 146;
				this.match(TntParser.LPAREN);
				this.state = 147;
				this.type(0);
				this.state = 148;
				this.match(TntParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new TypeTupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.match(TntParser.LPAREN);
				this.state = 151;
				this.type(0);
				this.state = 152;
				this.match(TntParser.T__16);
				this.state = 153;
				this.type(0);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 154;
					this.match(TntParser.T__16);
					this.state = 155;
					this.type(0);
					}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 161;
				this.match(TntParser.RPAREN);
				}
				break;

			case 5:
				{
				_localctx = new TypeRecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
				this.match(TntParser.T__1);
				this.state = 164;
				this.match(TntParser.IDENTIFIER);
				this.state = 165;
				this.match(TntParser.T__4);
				this.state = 166;
				this.type(0);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 167;
					this.match(TntParser.T__16);
					this.state = 168;
					this.match(TntParser.IDENTIFIER);
					this.state = 169;
					this.match(TntParser.T__4);
					this.state = 170;
					this.type(0);
					}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 176;
				this.match(TntParser.T__2);
				}
				break;

			case 6:
				{
				_localctx = new TypeUnionRecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 179;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 178;
						this.typeUnionRecOne();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 181;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 7:
				{
				_localctx = new TypeIntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.match(TntParser.T__19);
				}
				break;

			case 8:
				{
				_localctx = new TypeStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 184;
				this.match(TntParser.T__20);
				}
				break;

			case 9:
				{
				_localctx = new TypeBoolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 185;
				this.match(TntParser.T__21);
				}
				break;

			case 10:
				{
				_localctx = new TypeConstOrVarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 186;
				this.match(TntParser.IDENTIFIER);
				}
				break;

			case 11:
				{
				_localctx = new TypeParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 187;
				this.match(TntParser.LPAREN);
				this.state = 188;
				this.type(0);
				this.state = 189;
				this.match(TntParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 198;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeFunContext(new TypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_type);
					this.state = 193;
					if (!(this.precpred(this._ctx, 12))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
					}
					this.state = 194;
					this.match(TntParser.T__17);
					this.state = 195;
					this.type(13);
					}
					}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeUnionRecOne(): TypeUnionRecOneContext {
		let _localctx: TypeUnionRecOneContext = new TypeUnionRecOneContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TntParser.RULE_typeUnionRecOne);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(TntParser.T__22);
			this.state = 202;
			this.match(TntParser.T__1);
			this.state = 203;
			this.match(TntParser.IDENTIFIER);
			this.state = 204;
			this.match(TntParser.T__4);
			this.state = 205;
			this.match(TntParser.STRING);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TntParser.T__16) {
				{
				{
				this.state = 206;
				this.match(TntParser.T__16);
				this.state = 207;
				this.match(TntParser.IDENTIFIER);
				this.state = 208;
				this.match(TntParser.T__4);
				this.state = 209;
				this.type(0);
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 215;
			this.match(TntParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, TntParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				_localctx = new OperAppContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 218;
				this.normalCallName();
				this.state = 219;
				this.match(TntParser.LPAREN);
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15) | (1 << TntParser.T__23) | (1 << TntParser.T__26) | (1 << TntParser.T__29) | (1 << TntParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TntParser.BOOL - 32)) | (1 << (TntParser.INT - 32)) | (1 << (TntParser.AND - 32)) | (1 << (TntParser.OR - 32)) | (1 << (TntParser.IFF - 32)) | (1 << (TntParser.IMPLIES - 32)) | (1 << (TntParser.SUBSETEQ - 32)) | (1 << (TntParser.IN - 32)) | (1 << (TntParser.NOTIN - 32)) | (1 << (TntParser.SET - 32)) | (1 << (TntParser.SEQ - 32)) | (1 << (TntParser.MINUS - 32)) | (1 << (TntParser.LPAREN - 32)) | (1 << (TntParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 220;
					this.argList();
					}
				}

				this.state = 223;
				this.match(TntParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new UminusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 225;
				this.match(TntParser.MINUS);
				this.state = 226;
				this.expr(23);
				}
				break;

			case 3:
				{
				_localctx = new IfElseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 227;
				this.match(TntParser.T__26);
				this.state = 228;
				this.match(TntParser.LPAREN);
				this.state = 229;
				this.expr(0);
				this.state = 230;
				this.match(TntParser.RPAREN);
				this.state = 231;
				this.expr(0);
				this.state = 232;
				this.match(TntParser.T__27);
				this.state = 233;
				this.expr(19);
				}
				break;

			case 4:
				{
				_localctx = new AndExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 235;
				this.match(TntParser.LPAREN);
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__28) {
					{
					this.state = 236;
					this.match(TntParser.T__28);
					}
				}

				this.state = 239;
				this.expr(0);
				this.state = 240;
				this.match(TntParser.T__28);
				this.state = 241;
				this.expr(0);
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__28) {
					{
					{
					this.state = 242;
					this.match(TntParser.T__28);
					this.state = 243;
					this.expr(0);
					}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 249;
				this.match(TntParser.RPAREN);
				}
				break;

			case 5:
				{
				_localctx = new OrExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 251;
				this.match(TntParser.LPAREN);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__22) {
					{
					this.state = 252;
					this.match(TntParser.T__22);
					}
				}

				this.state = 255;
				this.expr(0);
				this.state = 256;
				this.match(TntParser.T__22);
				this.state = 257;
				this.expr(0);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__22) {
					{
					{
					this.state = 258;
					this.match(TntParser.T__22);
					this.state = 259;
					this.expr(0);
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 265;
				this.match(TntParser.RPAREN);
				}
				break;

			case 6:
				{
				_localctx = new AndActionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 267;
				this.match(TntParser.T__1);
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__28) {
					{
					this.state = 268;
					this.match(TntParser.T__28);
					}
				}

				this.state = 271;
				this.expr(0);
				this.state = 272;
				this.match(TntParser.T__28);
				this.state = 273;
				this.expr(0);
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__28) {
					{
					{
					this.state = 274;
					this.match(TntParser.T__28);
					this.state = 275;
					this.expr(0);
					}
					}
					this.state = 280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 281;
				this.match(TntParser.T__2);
				}
				break;

			case 7:
				{
				_localctx = new OrActionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 283;
				this.match(TntParser.T__1);
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TntParser.T__22) {
					{
					this.state = 284;
					this.match(TntParser.T__22);
					}
				}

				this.state = 287;
				this.expr(0);
				this.state = 288;
				this.match(TntParser.T__22);
				this.state = 289;
				this.expr(0);
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__22) {
					{
					{
					this.state = 290;
					this.match(TntParser.T__22);
					this.state = 291;
					this.expr(0);
					}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 297;
				this.match(TntParser.T__2);
				}
				break;

			case 8:
				{
				_localctx = new LiteralOrIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 299;
				_la = this._input.LA(1);
				if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (TntParser.STRING - 31)) | (1 << (TntParser.BOOL - 31)) | (1 << (TntParser.INT - 31)) | (1 << (TntParser.IDENTIFIER - 31)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 9:
				{
				_localctx = new TupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 300;
				this.match(TntParser.LPAREN);
				this.state = 301;
				this.expr(0);
				this.state = 302;
				this.match(TntParser.T__16);
				this.state = 303;
				this.expr(0);
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 304;
					this.match(TntParser.T__16);
					this.state = 305;
					this.expr(0);
					}
					}
					this.state = 310;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 311;
				this.match(TntParser.RPAREN);
				}
				break;

			case 10:
				{
				_localctx = new RecordContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 313;
				this.match(TntParser.T__1);
				this.state = 314;
				this.match(TntParser.IDENTIFIER);
				this.state = 315;
				this.match(TntParser.T__4);
				this.state = 316;
				this.expr(0);
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 317;
					this.match(TntParser.T__16);
					this.state = 318;
					this.match(TntParser.IDENTIFIER);
					this.state = 319;
					this.match(TntParser.T__4);
					this.state = 320;
					this.expr(0);
					}
					}
					this.state = 325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 326;
				this.match(TntParser.T__2);
				}
				break;

			case 11:
				{
				_localctx = new SequenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				{
				this.state = 328;
				this.match(TntParser.T__23);
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15) | (1 << TntParser.T__23) | (1 << TntParser.T__26) | (1 << TntParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TntParser.BOOL - 32)) | (1 << (TntParser.INT - 32)) | (1 << (TntParser.AND - 32)) | (1 << (TntParser.OR - 32)) | (1 << (TntParser.IFF - 32)) | (1 << (TntParser.IMPLIES - 32)) | (1 << (TntParser.SUBSETEQ - 32)) | (1 << (TntParser.IN - 32)) | (1 << (TntParser.NOTIN - 32)) | (1 << (TntParser.SET - 32)) | (1 << (TntParser.SEQ - 32)) | (1 << (TntParser.MINUS - 32)) | (1 << (TntParser.LPAREN - 32)) | (1 << (TntParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 329;
					this.expr(0);
					this.state = 334;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TntParser.T__16) {
						{
						{
						this.state = 330;
						this.match(TntParser.T__16);
						this.state = 331;
						this.expr(0);
						}
						}
						this.state = 336;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 339;
				this.match(TntParser.T__24);
				}
				}
				break;

			case 12:
				{
				_localctx = new LetInContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 340;
				this.operDef();
				this.state = 341;
				this.expr(3);
				}
				break;

			case 13:
				{
				_localctx = new ParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 343;
				this.match(TntParser.LPAREN);
				this.state = 344;
				this.expr(0);
				this.state = 345;
				this.match(TntParser.RPAREN);
				}
				break;

			case 14:
				{
				_localctx = new BracesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 347;
				this.match(TntParser.T__1);
				this.state = 348;
				this.expr(0);
				this.state = 349;
				this.match(TntParser.T__2);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 404;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 402;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new PowContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 353;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 354;
						(_localctx as PowContext)._op = this.match(TntParser.T__25);
						this.state = 355;
						this.expr(22);
						}
						break;

					case 2:
						{
						_localctx = new MultDivContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 356;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 357;
						(_localctx as MultDivContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (TntParser.MUL - 45)) | (1 << (TntParser.DIV - 45)) | (1 << (TntParser.MOD - 45)))) !== 0))) {
							(_localctx as MultDivContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 358;
						this.expr(22);
						}
						break;

					case 3:
						{
						_localctx = new PlusMinusContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 359;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 360;
						(_localctx as PlusMinusContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === TntParser.PLUS || _la === TntParser.MINUS)) {
							(_localctx as PlusMinusContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 361;
						this.expr(21);
						}
						break;

					case 4:
						{
						_localctx = new RelationsContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 362;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 363;
						(_localctx as RelationsContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TntParser.SUBSETEQ - 38)) | (1 << (TntParser.IN - 38)) | (1 << (TntParser.NOTIN - 38)) | (1 << (TntParser.GT - 38)) | (1 << (TntParser.LT - 38)) | (1 << (TntParser.GE - 38)) | (1 << (TntParser.LE - 38)) | (1 << (TntParser.NE - 38)) | (1 << (TntParser.EQ - 38)) | (1 << (TntParser.ASGN - 38)))) !== 0))) {
							(_localctx as RelationsContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 364;
						this.expr(19);
						}
						break;

					case 5:
						{
						_localctx = new ErrorEqContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 365;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 366;
						this.match(TntParser.T__7);
						this.state = 367;
						this.expr(18);

						                            this.notifyErrorListeners("TNT006: unexpected '=', did you mean '=='?")
						                          
						}
						break;

					case 6:
						{
						_localctx = new AndContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 370;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 371;
						this.match(TntParser.AND);
						this.state = 372;
						this.expr(17);
						}
						break;

					case 7:
						{
						_localctx = new OrContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 373;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 374;
						this.match(TntParser.OR);
						this.state = 375;
						this.expr(16);
						}
						break;

					case 8:
						{
						_localctx = new IffContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 376;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 377;
						this.match(TntParser.IFF);
						this.state = 378;
						this.expr(15);
						}
						break;

					case 9:
						{
						_localctx = new ImpliesContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 379;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 380;
						this.match(TntParser.IMPLIES);
						this.state = 381;
						this.expr(14);
						}
						break;

					case 10:
						{
						_localctx = new DotCallContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 382;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 383;
						this.match(TntParser.T__10);
						this.state = 384;
						this.nameAfterDot();
						this.state = 390;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
						case 1:
							{
							this.state = 385;
							this.match(TntParser.LPAREN);
							this.state = 387;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TntParser.T__1) | (1 << TntParser.T__11) | (1 << TntParser.T__12) | (1 << TntParser.T__13) | (1 << TntParser.T__14) | (1 << TntParser.T__15) | (1 << TntParser.T__23) | (1 << TntParser.T__26) | (1 << TntParser.T__29) | (1 << TntParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TntParser.BOOL - 32)) | (1 << (TntParser.INT - 32)) | (1 << (TntParser.AND - 32)) | (1 << (TntParser.OR - 32)) | (1 << (TntParser.IFF - 32)) | (1 << (TntParser.IMPLIES - 32)) | (1 << (TntParser.SUBSETEQ - 32)) | (1 << (TntParser.IN - 32)) | (1 << (TntParser.NOTIN - 32)) | (1 << (TntParser.SET - 32)) | (1 << (TntParser.SEQ - 32)) | (1 << (TntParser.MINUS - 32)) | (1 << (TntParser.LPAREN - 32)) | (1 << (TntParser.IDENTIFIER - 32)))) !== 0)) {
								{
								this.state = 386;
								this.argList();
								}
							}

							this.state = 389;
							this.match(TntParser.RPAREN);
							}
							break;
						}
						}
						break;

					case 11:
						{
						_localctx = new FunAppContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 392;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 393;
						this.match(TntParser.T__23);
						this.state = 394;
						this.expr(0);
						this.state = 395;
						this.match(TntParser.T__24);
						}
						break;

					case 12:
						{
						_localctx = new InfixCallContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TntParser.RULE_expr);
						this.state = 397;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 398;
						this.match(TntParser.IDENTIFIER);
						this.state = 400;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
						case 1:
							{
							this.state = 399;
							this.argList();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TntParser.RULE_lambda);
		let _la: number;
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.T__29:
			case TntParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 407;
				this.identOrHole();
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 408;
					this.match(TntParser.T__16);
					this.state = 409;
					this.identOrHole();
					}
					}
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 415;
				this.match(TntParser.T__17);
				this.state = 416;
				this.expr(0);
				}
				break;
			case TntParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
				this.match(TntParser.LPAREN);
				this.state = 419;
				this.identOrHole();
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 420;
					this.match(TntParser.T__16);
					this.state = 421;
					this.identOrHole();
					}
					}
					this.state = 426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 427;
				this.match(TntParser.T__17);
				this.state = 428;
				this.expr(0);
				this.state = 429;
				this.match(TntParser.RPAREN);
				}
				break;
			case TntParser.T__1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 431;
				this.match(TntParser.T__1);
				this.state = 432;
				this.identOrHole();
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TntParser.T__16) {
					{
					{
					this.state = 433;
					this.match(TntParser.T__16);
					this.state = 434;
					this.identOrHole();
					}
					}
					this.state = 439;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 440;
				this.match(TntParser.T__17);
				this.state = 441;
				this.expr(0);
				this.state = 442;
				this.match(TntParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identOrHole(): IdentOrHoleContext {
		let _localctx: IdentOrHoleContext = new IdentOrHoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TntParser.RULE_identOrHole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			_la = this._input.LA(1);
			if (!(_la === TntParser.T__29 || _la === TntParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identOrStar(): IdentOrStarContext {
		let _localctx: IdentOrStarContext = new IdentOrStarContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TntParser.RULE_identOrStar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			_la = this._input.LA(1);
			if (!(_la === TntParser.MUL || _la === TntParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TntParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(TntParser.IDENTIFIER);
			this.state = 455;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 451;
					this.match(TntParser.T__10);
					this.state = 452;
					this.match(TntParser.IDENTIFIER);
					}
					}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaOrExpr(): LambdaOrExprContext {
		let _localctx: LambdaOrExprContext = new LambdaOrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TntParser.RULE_lambdaOrExpr);
		try {
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.lambda();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TntParser.RULE_argList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.lambdaOrExpr();
			this.state = 467;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 463;
					this.match(TntParser.T__16);
					this.state = 464;
					this.lambdaOrExpr();
					}
					}
				}
				this.state = 469;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalCallName(): NormalCallNameContext {
		let _localctx: NormalCallNameContext = new NormalCallNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TntParser.RULE_normalCallName);
		let _la: number;
		try {
			this.state = 472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 470;
				this.match(TntParser.IDENTIFIER);
				}
				break;
			case TntParser.AND:
			case TntParser.OR:
			case TntParser.IFF:
			case TntParser.IMPLIES:
			case TntParser.SUBSETEQ:
			case TntParser.IN:
			case TntParser.NOTIN:
			case TntParser.SET:
			case TntParser.SEQ:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (TntParser.AND - 34)) | (1 << (TntParser.OR - 34)) | (1 << (TntParser.IFF - 34)) | (1 << (TntParser.IMPLIES - 34)) | (1 << (TntParser.SUBSETEQ - 34)) | (1 << (TntParser.IN - 34)) | (1 << (TntParser.NOTIN - 34)) | (1 << (TntParser.SET - 34)) | (1 << (TntParser.SEQ - 34)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameAfterDot(): NameAfterDotContext {
		let _localctx: NameAfterDotContext = new NameAfterDotContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TntParser.RULE_nameAfterDot);
		let _la: number;
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TntParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 474;
				this.match(TntParser.IDENTIFIER);
				}
				break;
			case TntParser.AND:
			case TntParser.OR:
			case TntParser.IFF:
			case TntParser.IMPLIES:
			case TntParser.SUBSETEQ:
			case TntParser.IN:
			case TntParser.NOTIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (TntParser.AND - 34)) | (1 << (TntParser.OR - 34)) | (1 << (TntParser.IFF - 34)) | (1 << (TntParser.IMPLIES - 34)) | (1 << (TntParser.SUBSETEQ - 34)) | (1 << (TntParser.IN - 34)) | (1 << (TntParser.NOTIN - 34)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TntParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (TntParser.T__25 - 26)) | (1 << (TntParser.AND - 26)) | (1 << (TntParser.OR - 26)) | (1 << (TntParser.IFF - 26)) | (1 << (TntParser.IMPLIES - 26)) | (1 << (TntParser.SUBSETEQ - 26)) | (1 << (TntParser.IN - 26)) | (1 << (TntParser.NOTIN - 26)) | (1 << (TntParser.PLUS - 26)) | (1 << (TntParser.MINUS - 26)) | (1 << (TntParser.MUL - 26)) | (1 << (TntParser.DIV - 26)) | (1 << (TntParser.MOD - 26)) | (1 << (TntParser.GT - 26)) | (1 << (TntParser.LT - 26)) | (1 << (TntParser.GE - 26)) | (1 << (TntParser.LE - 26)) | (1 << (TntParser.NE - 26)) | (1 << (TntParser.EQ - 26)) | (1 << (TntParser.ASGN - 26)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TntParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (TntParser.STRING - 31)) | (1 << (TntParser.BOOL - 31)) | (1 << (TntParser.INT - 31)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 7:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 22);

		case 2:
			return this.precpred(this._ctx, 21);

		case 3:
			return this.precpred(this._ctx, 20);

		case 4:
			return this.precpred(this._ctx, 18);

		case 5:
			return this.precpred(this._ctx, 17);

		case 6:
			return this.precpred(this._ctx, 16);

		case 7:
			return this.precpred(this._ctx, 15);

		case 8:
			return this.precpred(this._ctx, 14);

		case 9:
			return this.precpred(this._ctx, 13);

		case 10:
			return this.precpred(this._ctx, 26);

		case 11:
			return this.precpred(this._ctx, 24);

		case 12:
			return this.precpred(this._ctx, 12);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03>\u01E5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02+\n\x02\f\x02\x0E\x02" +
		".\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03K\n\x03\x03\x04\x03\x04\x03\x04\x05\x04P\n\x04\x03\x04" +
		"\x03\x04\x05\x04T\n\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x07\x05]\n\x05\f\x05\x0E\x05`\v\x05\x05\x05b\n\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06s\n\x06\f\x06\x0E\x06v\v\x06" +
		"\x03\x06\x03\x06\x05\x06z\n\x06\x05\x06|\n\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x85\n\x07\f\x07\x0E\x07\x88\v" +
		"\x07\x05\x07\x8A\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x9F\n\x07\f\x07\x0E\x07\xA2\v" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07\xAE\n\x07\f\x07\x0E\x07\xB1\v\x07\x03\x07\x03\x07" +
		"\x03\x07\x06\x07\xB6\n\x07\r\x07\x0E\x07\xB7\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xC2\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\xC7\n\x07\f\x07\x0E\x07\xCA\v\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xD5\n\b\f\b\x0E\b\xD8\v\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t\xE0\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xF0\n\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xF7\n\t\f\t\x0E\t\xFA\v\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u0100\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0107" +
		"\n\t\f\t\x0E\t\u010A\v\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0110\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x07\t\u0117\n\t\f\t\x0E\t\u011A\v\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u0120\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0127" +
		"\n\t\f\t\x0E\t\u012A\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x07\t\u0135\n\t\f\t\x0E\t\u0138\v\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0144\n\t\f\t\x0E\t\u0147\v\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u014F\n\t\f\t\x0E\t\u0152\v\t\x05" +
		"\t\u0154\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u0162\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0186\n\t\x03\t\x05\t\u0189\n\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0193\n\t\x07\t\u0195\n\t\f" +
		"\t\x0E\t\u0198\v\t\x03\n\x03\n\x03\n\x07\n\u019D\n\n\f\n\x0E\n\u01A0\v" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u01A9\n\n\f\n\x0E\n" +
		"\u01AC\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u01B6" +
		"\n\n\f\n\x0E\n\u01B9\v\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01BF\n\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x07\r\u01C8\n\r\f\r\x0E\r\u01CB\v" +
		"\r\x03\x0E\x03\x0E\x05\x0E\u01CF\n\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u01D4\n\x0F\f\x0F\x0E\x0F\u01D7\v\x0F\x03\x10\x03\x10\x05\x10\u01DB\n" +
		"\x10\x03\x11\x03\x11\x05\x11\u01DF\n\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x02\x02\x04\f\x10\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02\x02\r\x03\x02\x0E\x12\x04\x02!#;;\x03\x02/1\x03\x02-" +
		".\x04\x02(*28\x04\x02  ;;\x04\x02//;;\x03\x02$,\x03\x02$*\x05\x02\x1C" +
		"\x1C$*-8\x03\x02!#\x02\u0225\x02&\x03\x02\x02\x02\x04J\x03\x02\x02\x02" +
		"\x06L\x03\x02\x02\x02\bX\x03\x02\x02\x02\ne\x03\x02\x02\x02\f\xC1\x03" +
		"\x02\x02\x02\x0E\xCB\x03\x02\x02\x02\x10\u0161\x03\x02\x02\x02\x12\u01BE" +
		"\x03\x02\x02\x02\x14\u01C0\x03\x02\x02\x02\x16\u01C2\x03\x02\x02\x02\x18" +
		"\u01C4\x03\x02\x02\x02\x1A\u01CE\x03\x02\x02\x02\x1C\u01D0\x03\x02\x02" +
		"\x02\x1E\u01DA\x03\x02\x02\x02 \u01DE\x03\x02\x02\x02\"\u01E0\x03\x02" +
		"\x02\x02$\u01E2\x03\x02\x02\x02&\'\x07\x03\x02\x02\'(\x07;\x02\x02(,\x07" +
		"\x04\x02\x02)+\x05\x04\x03\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03" +
		"\x02\x02\x02,-\x03\x02\x02\x02-/\x03\x02\x02\x02.,\x03\x02\x02\x02/0\x07" +
		"\x05\x02\x020\x03\x03\x02\x02\x0212\x07\x06\x02\x0223\x07;\x02\x0234\x07" +
		"\x07\x02\x024K\x05\f\x07\x0256\x07\b\x02\x0267\x07;\x02\x0278\x07\x07" +
		"\x02\x028K\x05\f\x07\x029:\x07\t\x02\x02:;\x05\x14\v\x02;<\x07\n\x02\x02" +
		"<=\x05\x10\t\x02=K\x03\x02\x02\x02>K\x05\x06\x04\x02?K\x05\x02\x02\x02" +
		"@K\x05\n\x06\x02AB\x07\v\x02\x02BC\x07;\x02\x02CD\x07\n\x02\x02DK\x05" +
		"\f\x07\x02EF\x07\f\x02\x02FG\x05\x18\r\x02GH\x07\r\x02\x02HI\x05\x16\f" +
		"\x02IK\x03\x02\x02\x02J1\x03\x02\x02\x02J5\x03\x02\x02\x02J9\x03\x02\x02" +
		"\x02J>\x03\x02\x02\x02J?\x03\x02\x02\x02J@\x03\x02\x02\x02JA\x03\x02\x02" +
		"\x02JE\x03\x02\x02\x02K\x05\x03\x02\x02\x02LM\t\x02\x02\x02MO\x07;\x02" +
		"\x02NP\x05\b\x05\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02PS\x03\x02\x02" +
		"\x02QR\x07\x07\x02\x02RT\x05\f\x07\x02SQ\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TU\x03\x02\x02\x02UV\x07\n\x02\x02VW\x05\x10\t\x02W\x07\x03\x02\x02" +
		"\x02Xa\x079\x02\x02Y^\x07;\x02\x02Z[\x07\x13\x02\x02[]\x07;\x02\x02\\" +
		"Z\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02" +
		"_b\x03\x02\x02\x02`^\x03\x02\x02\x02aY\x03\x02\x02\x02ab\x03\x02\x02\x02" +
		"bc\x03\x02\x02\x02cd\x07:\x02\x02d\t\x03\x02\x02\x02ef\x07\x03\x02\x02" +
		"fg\x07;\x02\x02gh\x07\n\x02\x02hi\x07;\x02\x02i{\x079\x02\x02j|\x07/\x02" +
		"\x02kl\x07;\x02\x02lm\x07\n\x02\x02mt\x05\x10\t\x02no\x07\x13\x02\x02" +
		"op\x07;\x02\x02pq\x07\n\x02\x02qs\x05\x10\t\x02rn\x03\x02\x02\x02sv\x03" +
		"\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uy\x03\x02\x02\x02vt\x03" +
		"\x02\x02\x02wx\x07\x13\x02\x02xz\x07/\x02\x02yw\x03\x02\x02\x02yz\x03" +
		"\x02\x02\x02z|\x03\x02\x02\x02{j\x03\x02\x02\x02{k\x03\x02\x02\x02|}\x03" +
		"\x02\x02\x02}~\x07:\x02\x02~\v\x03\x02\x02\x02\x7F\x80\b\x07\x01\x02\x80" +
		"\x89\x079\x02\x02\x81\x86\x05\f\x07\x02\x82\x83\x07\x13\x02\x02\x83\x85" +
		"\x05\f\x07\x02\x84\x82\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84" +
		"\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86" +
		"\x03\x02\x02\x02\x89\x81\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B" +
		"\x03\x02\x02\x02\x8B\x8C\x07:\x02\x02\x8C\x8D\x07\x15\x02\x02\x8D\xC2" +
		"\x05\f\x07\r\x8E\x8F\x07+\x02\x02\x8F\x90\x079\x02\x02\x90\x91\x05\f\x07" +
		"\x02\x91\x92\x07:\x02\x02\x92\xC2\x03\x02\x02\x02\x93\x94\x07,\x02\x02" +
		"\x94\x95\x079\x02\x02\x95\x96\x05\f\x07\x02\x96\x97\x07:\x02\x02\x97\xC2" +
		"\x03\x02\x02\x02\x98\x99\x079\x02\x02\x99\x9A\x05\f\x07\x02\x9A\x9B\x07" +
		"\x13\x02\x02\x9B\xA0\x05\f\x07\x02\x9C\x9D\x07\x13\x02\x02\x9D\x9F\x05" +
		"\f\x07\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03" +
		"\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03" +
		"\x02\x02\x02\xA3\xA4\x07:\x02\x02\xA4\xC2\x03\x02\x02\x02\xA5\xA6\x07" +
		"\x04\x02\x02\xA6\xA7\x07;\x02\x02\xA7\xA8\x07\x07\x02\x02\xA8\xAF\x05" +
		"\f\x07\x02\xA9\xAA\x07\x13\x02\x02\xAA\xAB\x07;\x02\x02\xAB\xAC\x07\x07" +
		"\x02\x02\xAC\xAE\x05\f\x07\x02\xAD\xA9\x03\x02\x02\x02\xAE\xB1\x03\x02" +
		"\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02" +
		"\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07\x05\x02\x02\xB3\xC2\x03\x02" +
		"\x02\x02\xB4\xB6\x05\x0E\b\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02" +
		"\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xC2\x03\x02" +
		"\x02\x02\xB9\xC2\x07\x16\x02\x02\xBA\xC2\x07\x17\x02\x02\xBB\xC2\x07\x18" +
		"\x02\x02\xBC\xC2\x07;\x02\x02\xBD\xBE\x079\x02\x02\xBE\xBF\x05\f\x07\x02" +
		"\xBF\xC0\x07:\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\x7F\x03\x02\x02\x02" +
		"\xC1\x8E\x03\x02\x02\x02\xC1\x93\x03\x02\x02\x02\xC1\x98\x03\x02\x02\x02" +
		"\xC1\xA5\x03\x02\x02\x02\xC1\xB5\x03\x02\x02\x02\xC1\xB9\x03\x02\x02\x02" +
		"\xC1\xBA\x03\x02\x02\x02\xC1\xBB\x03\x02\x02\x02\xC1\xBC\x03\x02\x02\x02" +
		"\xC1\xBD\x03\x02\x02\x02\xC2\xC8\x03\x02\x02\x02\xC3\xC4\f\x0E\x02\x02" +
		"\xC4\xC5\x07\x14\x02\x02\xC5\xC7\x05\f\x07\x0F\xC6\xC3\x03\x02\x02\x02" +
		"\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02" +
		"\xC9\r\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x07\x19\x02\x02" +
		"\xCC\xCD\x07\x04\x02\x02\xCD\xCE\x07;\x02\x02\xCE\xCF\x07\x07\x02\x02" +
		"\xCF\xD6\x07!\x02\x02\xD0\xD1\x07\x13\x02\x02\xD1\xD2\x07;\x02\x02\xD2" +
		"\xD3\x07\x07\x02\x02\xD3\xD5\x05\f\x07\x02\xD4\xD0\x03\x02\x02\x02\xD5" +
		"\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7" +
		"\xD9\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDA\x07\x05\x02\x02\xDA" +
		"\x0F\x03\x02\x02\x02\xDB\xDC\b\t\x01\x02\xDC\xDD\x05\x1E\x10\x02\xDD\xDF" +
		"\x079\x02\x02\xDE\xE0\x05\x1C\x0F\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x07:\x02\x02\xE2\u0162" +
		"\x03\x02\x02\x02\xE3\xE4\x07.\x02\x02\xE4\u0162\x05\x10\t\x19\xE5\xE6" +
		"\x07\x1D\x02\x02\xE6\xE7\x079\x02\x02\xE7\xE8\x05\x10\t\x02\xE8\xE9\x07" +
		":\x02\x02\xE9\xEA\x05\x10\t\x02\xEA\xEB\x07\x1E\x02\x02\xEB\xEC\x05\x10" +
		"\t\x15\xEC\u0162\x03\x02\x02\x02\xED\xEF\x079\x02\x02\xEE\xF0\x07\x1F" +
		"\x02\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02" +
		"\x02\x02\xF1\xF2\x05\x10\t\x02\xF2\xF3\x07\x1F\x02\x02\xF3\xF8\x05\x10" +
		"\t\x02\xF4\xF5\x07\x1F\x02\x02\xF5\xF7\x05\x10\t\x02\xF6\xF4\x03\x02\x02" +
		"\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02" +
		"\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x07:\x02" +
		"\x02\xFC\u0162\x03\x02\x02\x02\xFD\xFF\x079\x02\x02\xFE\u0100\x07\x19" +
		"\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101" +
		"\x03\x02\x02\x02\u0101\u0102\x05\x10\t\x02\u0102\u0103\x07\x19\x02\x02" +
		"\u0103\u0108\x05\x10\t\x02\u0104\u0105\x07\x19\x02\x02\u0105\u0107\x05" +
		"\x10\t\x02\u0106\u0104\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108" +
		"\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B\x03\x02" +
		"\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010C\x07:\x02\x02\u010C\u0162" +
		"\x03\x02\x02\x02\u010D\u010F\x07\x04\x02\x02\u010E\u0110\x07\x1F\x02\x02" +
		"\u010F\u010E\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x03" +
		"\x02\x02\x02\u0111\u0112\x05\x10\t\x02\u0112\u0113\x07\x1F\x02\x02\u0113" +
		"\u0118\x05\x10\t\x02\u0114\u0115\x07\x1F\x02\x02\u0115\u0117\x05\x10\t" +
		"\x02\u0116\u0114\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116" +
		"\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02\x02\x02" +
		"\u011A\u0118\x03\x02\x02\x02\u011B\u011C\x07\x05\x02\x02\u011C\u0162\x03" +
		"\x02\x02\x02\u011D\u011F\x07\x04\x02\x02\u011E\u0120\x07\x19\x02\x02\u011F" +
		"\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03\x02" +
		"\x02\x02\u0121\u0122\x05\x10\t\x02\u0122\u0123\x07\x19\x02\x02\u0123\u0128" +
		"\x05\x10\t\x02\u0124\u0125\x07\x19\x02\x02\u0125\u0127\x05\x10\t\x02\u0126" +
		"\u0124\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02" +
		"\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012B\u012C\x07\x05\x02\x02\u012C\u0162\x03\x02" +
		"\x02\x02\u012D\u0162\t\x03\x02\x02\u012E\u012F\x079\x02\x02\u012F\u0130" +
		"\x05\x10\t\x02\u0130\u0131\x07\x13\x02\x02\u0131\u0136\x05\x10\t\x02\u0132" +
		"\u0133\x07\x13\x02\x02\u0133\u0135\x05\x10\t\x02\u0134\u0132\x03\x02\x02" +
		"\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137" +
		"\x03\x02\x02\x02\u0137\u0139\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02" +
		"\u0139\u013A\x07:\x02\x02\u013A\u0162\x03\x02\x02\x02\u013B\u013C\x07" +
		"\x04\x02\x02\u013C\u013D\x07;\x02\x02\u013D\u013E\x07\x07\x02\x02\u013E" +
		"\u0145\x05\x10\t\x02\u013F\u0140\x07\x13\x02\x02\u0140\u0141\x07;\x02" +
		"\x02\u0141\u0142\x07\x07\x02\x02\u0142\u0144\x05\x10\t\x02\u0143\u013F" +
		"\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02" +
		"\u0145\u0146\x03\x02\x02\x02\u0146\u0148\x03\x02\x02\x02\u0147\u0145\x03" +
		"\x02\x02\x02\u0148\u0149\x07\x05\x02\x02\u0149\u0162\x03\x02\x02\x02\u014A" +
		"\u0153\x07\x1A\x02\x02\u014B\u0150\x05\x10\t\x02\u014C\u014D\x07\x13\x02" +
		"\x02\u014D\u014F\x05\x10\t\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0152" +
		"\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
		"\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u014B\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155" +
		"\u0162\x07\x1B\x02\x02\u0156\u0157\x05\x06\x04\x02\u0157\u0158\x05\x10" +
		"\t\x05\u0158\u0162\x03\x02\x02\x02\u0159\u015A\x079\x02\x02\u015A\u015B" +
		"\x05\x10\t\x02\u015B\u015C\x07:\x02\x02\u015C\u0162\x03\x02\x02\x02\u015D" +
		"\u015E\x07\x04\x02\x02\u015E\u015F\x05\x10\t\x02\u015F\u0160\x07\x05\x02" +
		"\x02\u0160\u0162\x03\x02\x02\x02\u0161\xDB\x03\x02\x02\x02\u0161\xE3\x03" +
		"\x02\x02\x02\u0161\xE5\x03\x02\x02\x02\u0161\xED\x03\x02\x02\x02\u0161" +
		"\xFD\x03\x02\x02\x02\u0161\u010D\x03\x02\x02\x02\u0161\u011D\x03\x02\x02" +
		"\x02\u0161\u012D\x03\x02\x02\x02\u0161\u012E\x03\x02\x02\x02\u0161\u013B" +
		"\x03\x02\x02\x02\u0161\u014A\x03\x02\x02\x02\u0161\u0156\x03\x02\x02\x02" +
		"\u0161\u0159\x03\x02\x02\x02\u0161\u015D\x03\x02\x02\x02\u0162\u0196\x03" +
		"\x02\x02\x02\u0163\u0164\f\x18\x02\x02\u0164\u0165\x07\x1C\x02\x02\u0165" +
		"\u0195\x05\x10\t\x18\u0166\u0167\f\x17\x02\x02\u0167\u0168\t\x04\x02\x02" +
		"\u0168\u0195\x05\x10\t\x18\u0169\u016A\f\x16\x02\x02\u016A\u016B\t\x05" +
		"\x02\x02\u016B\u0195\x05\x10\t\x17\u016C\u016D\f\x14\x02\x02\u016D\u016E" +
		"\t\x06\x02\x02\u016E\u0195\x05\x10\t\x15\u016F\u0170\f\x13\x02\x02\u0170" +
		"\u0171\x07\n\x02\x02\u0171\u0172\x05\x10\t\x14\u0172\u0173\b\t\x01\x02" +
		"\u0173\u0195\x03\x02\x02\x02\u0174\u0175\f\x12\x02\x02\u0175\u0176\x07" +
		"$\x02\x02\u0176\u0195\x05\x10\t\x13\u0177\u0178\f\x11\x02\x02\u0178\u0179" +
		"\x07%\x02\x02\u0179\u0195\x05\x10\t\x12\u017A\u017B\f\x10\x02\x02\u017B" +
		"\u017C\x07&\x02\x02\u017C\u0195\x05\x10\t\x11\u017D\u017E\f\x0F\x02\x02" +
		"\u017E\u017F\x07\'\x02\x02\u017F\u0195\x05\x10\t\x10\u0180\u0181\f\x1C" +
		"\x02\x02\u0181\u0182\x07\r\x02\x02\u0182\u0188\x05 \x11\x02\u0183\u0185" +
		"\x079\x02\x02\u0184\u0186\x05\x1C\x0F\x02\u0185\u0184\x03\x02\x02\x02" +
		"\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x07" +
		":\x02\x02\u0188\u0183\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189" +
		"\u0195\x03\x02\x02\x02\u018A\u018B\f\x1A\x02\x02\u018B\u018C\x07\x1A\x02" +
		"\x02\u018C\u018D\x05\x10\t\x02\u018D\u018E\x07\x1B\x02\x02\u018E\u0195" +
		"\x03\x02\x02\x02\u018F\u0190\f\x0E\x02\x02\u0190\u0192\x07;\x02\x02\u0191" +
		"\u0193\x05\x1C\x0F\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02" +
		"\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0163\x03\x02\x02\x02\u0194" +
		"\u0166\x03\x02\x02\x02\u0194\u0169\x03\x02\x02\x02\u0194\u016C\x03\x02" +
		"\x02\x02\u0194\u016F\x03\x02\x02\x02\u0194\u0174\x03\x02\x02\x02\u0194" +
		"\u0177\x03\x02\x02\x02\u0194\u017A\x03\x02\x02\x02\u0194\u017D\x03\x02" +
		"\x02\x02\u0194\u0180\x03\x02\x02\x02\u0194\u018A\x03\x02\x02\x02\u0194" +
		"\u018F\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02" +
		"\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\x11\x03\x02\x02\x02\u0198\u0196" +
		"\x03\x02\x02\x02\u0199\u019E\x05\x14\v\x02\u019A\u019B\x07\x13\x02\x02" +
		"\u019B\u019D\x05\x14\v\x02\u019C\u019A\x03\x02\x02\x02\u019D\u01A0\x03" +
		"\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F" +
		"\u01A1\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A2\x07\x14" +
		"\x02\x02\u01A2\u01A3\x05\x10\t\x02\u01A3\u01BF\x03\x02\x02\x02\u01A4\u01A5" +
		"\x079\x02\x02\u01A5\u01AA\x05\x14\v\x02\u01A6\u01A7\x07\x13\x02\x02\u01A7" +
		"\u01A9\x05\x14\v\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02" +
		"\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AD" +
		"\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01AE\x07\x14\x02\x02" +
		"\u01AE\u01AF\x05\x10\t\x02\u01AF\u01B0\x07:\x02\x02\u01B0\u01BF\x03\x02" +
		"\x02\x02\u01B1\u01B2\x07\x04\x02\x02\u01B2\u01B7\x05\x14\v\x02\u01B3\u01B4" +
		"\x07\x13\x02\x02\u01B4\u01B6\x05\x14\v\x02\u01B5\u01B3\x03\x02\x02\x02" +
		"\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03" +
		"\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA" +
		"\u01BB\x07\x14\x02\x02\u01BB\u01BC\x05\x10\t\x02\u01BC\u01BD\x07\x05\x02" +
		"\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u0199\x03\x02\x02\x02\u01BE\u01A4" +
		"\x03\x02\x02\x02\u01BE\u01B1\x03\x02\x02\x02\u01BF\x13\x03\x02\x02\x02" +
		"\u01C0\u01C1\t\x07\x02\x02\u01C1\x15\x03\x02\x02\x02\u01C2\u01C3\t\b\x02" +
		"\x02\u01C3\x17\x03\x02\x02\x02\u01C4\u01C9\x07;\x02\x02\u01C5\u01C6\x07" +
		"\r\x02\x02\u01C6\u01C8\x07;\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8" +
		"\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02" +
		"\x02\x02\u01CA\x19\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CF" +
		"\x05\x12\n\x02\u01CD\u01CF\x05\x10\t\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE" +
		"\u01CD\x03\x02\x02\x02\u01CF\x1B\x03\x02\x02\x02\u01D0\u01D5\x05\x1A\x0E" +
		"\x02\u01D1\u01D2\x07\x13\x02\x02\u01D2\u01D4\x05\x1A\x0E\x02\u01D3\u01D1" +
		"\x03\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02" +
		"\u01D5\u01D6\x03\x02\x02\x02\u01D6\x1D\x03\x02\x02\x02\u01D7\u01D5\x03" +
		"\x02\x02\x02\u01D8\u01DB\x07;\x02\x02\u01D9\u01DB\t\t\x02\x02\u01DA\u01D8" +
		"\x03\x02\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB\x1F\x03\x02\x02\x02" +
		"\u01DC\u01DF\x07;\x02\x02\u01DD\u01DF\t\n\x02\x02\u01DE\u01DC\x03\x02" +
		"\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF!\x03\x02\x02\x02\u01E0\u01E1" +
		"\t\v\x02\x02\u01E1#\x03\x02\x02\x02\u01E2\u01E3\t\f\x02\x02\u01E3%\x03" +
		"\x02\x02\x02/,JOS^aty{\x86\x89\xA0\xAF\xB7\xC1\xC8\xD6\xDF\xEF\xF8\xFF" +
		"\u0108\u010F\u0118\u011F\u0128\u0136\u0145\u0150\u0153\u0161\u0185\u0188" +
		"\u0192\u0194\u0196\u019E\u01AA\u01B7\u01BE\u01C9\u01CE\u01D5\u01DA\u01DE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TntParser.__ATN) {
			TntParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TntParser._serializedATN));
		}

		return TntParser.__ATN;
	}

}

export class ModuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public unit(): UnitContext[];
	public unit(i: number): UnitContext;
	public unit(i?: number): UnitContext | UnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitContext);
		} else {
			return this.getRuleContext(i, UnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_module; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_unit; }
	public copyFrom(ctx: UnitContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstContext extends UnitContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterConst) {
			listener.enterConst(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitConst) {
			listener.exitConst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitConst) {
			return visitor.visitConst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarContext extends UnitContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssumeContext extends UnitContext {
	public identOrHole(): IdentOrHoleContext {
		return this.getRuleContext(0, IdentOrHoleContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAssume) {
			listener.enterAssume(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAssume) {
			listener.exitAssume(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAssume) {
			return visitor.visitAssume(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperContext extends UnitContext {
	public operDef(): OperDefContext {
		return this.getRuleContext(0, OperDefContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOper) {
			listener.enterOper(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOper) {
			listener.exitOper(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOper) {
			return visitor.visitOper(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModuleNestedContext extends UnitContext {
	public module(): ModuleContext {
		return this.getRuleContext(0, ModuleContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterModuleNested) {
			listener.enterModuleNested(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitModuleNested) {
			listener.exitModuleNested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitModuleNested) {
			return visitor.visitModuleNested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceContext extends UnitContext {
	public instanceMod(): InstanceModContext {
		return this.getRuleContext(0, InstanceModContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterInstance) {
			listener.enterInstance(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitInstance) {
			listener.exitInstance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitInstance) {
			return visitor.visitInstance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypedefContext extends UnitContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypedef) {
			listener.enterTypedef(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypedef) {
			listener.exitTypedef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypedef) {
			return visitor.visitTypedef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportDefContext extends UnitContext {
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	public identOrStar(): IdentOrStarContext {
		return this.getRuleContext(0, IdentOrStarContext);
	}
	constructor(ctx: UnitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterImportDef) {
			listener.enterImportDef(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitImportDef) {
			listener.exitImportDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitImportDef) {
			return visitor.visitImportDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperDefContext extends ParserRuleContext {
	public _qualifier!: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_operDef; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOperDef) {
			listener.enterOperDef(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOperDef) {
			listener.exitOperDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOperDef) {
			return visitor.visitOperDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_params; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterParams) {
			listener.enterParams(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitParams) {
			listener.exitParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitParams) {
			return visitor.visitParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceModContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_instanceMod; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterInstanceMod) {
			listener.enterInstanceMod(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitInstanceMod) {
			listener.exitInstanceMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitInstanceMod) {
			return visitor.visitInstanceMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeFunContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeFun) {
			listener.enterTypeFun(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeFun) {
			listener.exitTypeFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeFun) {
			return visitor.visitTypeFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeOperContext extends TypeContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeOper) {
			listener.enterTypeOper(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeOper) {
			listener.exitTypeOper(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeOper) {
			return visitor.visitTypeOper(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeSetContext extends TypeContext {
	public SET(): TerminalNode { return this.getToken(TntParser.SET, 0); }
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeSet) {
			listener.enterTypeSet(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeSet) {
			listener.exitTypeSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeSet) {
			return visitor.visitTypeSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeSeqContext extends TypeContext {
	public SEQ(): TerminalNode { return this.getToken(TntParser.SEQ, 0); }
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeSeq) {
			listener.enterTypeSeq(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeSeq) {
			listener.exitTypeSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeSeq) {
			return visitor.visitTypeSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeTupleContext extends TypeContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeTuple) {
			listener.enterTypeTuple(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeTuple) {
			listener.exitTypeTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeTuple) {
			return visitor.visitTypeTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRecContext extends TypeContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeRec) {
			listener.enterTypeRec(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeRec) {
			listener.exitTypeRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeRec) {
			return visitor.visitTypeRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeUnionRecContext extends TypeContext {
	public typeUnionRecOne(): TypeUnionRecOneContext[];
	public typeUnionRecOne(i: number): TypeUnionRecOneContext;
	public typeUnionRecOne(i?: number): TypeUnionRecOneContext | TypeUnionRecOneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeUnionRecOneContext);
		} else {
			return this.getRuleContext(i, TypeUnionRecOneContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeUnionRec) {
			listener.enterTypeUnionRec(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeUnionRec) {
			listener.exitTypeUnionRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeUnionRec) {
			return visitor.visitTypeUnionRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeIntContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeInt) {
			listener.enterTypeInt(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeInt) {
			listener.exitTypeInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeInt) {
			return visitor.visitTypeInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeStrContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeStr) {
			listener.enterTypeStr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeStr) {
			listener.exitTypeStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeStr) {
			return visitor.visitTypeStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeBoolContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeBool) {
			listener.enterTypeBool(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeBool) {
			listener.exitTypeBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeBool) {
			return visitor.visitTypeBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstOrVarContext extends TypeContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeConstOrVar) {
			listener.enterTypeConstOrVar(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeConstOrVar) {
			listener.exitTypeConstOrVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeConstOrVar) {
			return visitor.visitTypeConstOrVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeParenContext extends TypeContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeParen) {
			listener.enterTypeParen(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeParen) {
			listener.exitTypeParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeParen) {
			return visitor.visitTypeParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeUnionRecOneContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(TntParser.STRING, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_typeUnionRecOne; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTypeUnionRecOne) {
			listener.enterTypeUnionRecOne(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTypeUnionRecOne) {
			listener.exitTypeUnionRecOne(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTypeUnionRecOne) {
			return visitor.visitTypeUnionRecOne(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class DotCallContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public nameAfterDot(): NameAfterDotContext {
		return this.getRuleContext(0, NameAfterDotContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.RPAREN, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterDotCall) {
			listener.enterDotCall(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitDotCall) {
			listener.exitDotCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitDotCall) {
			return visitor.visitDotCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperAppContext extends ExprContext {
	public normalCallName(): NormalCallNameContext {
		return this.getRuleContext(0, NormalCallNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOperApp) {
			listener.enterOperApp(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOperApp) {
			listener.exitOperApp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOperApp) {
			return visitor.visitOperApp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunAppContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterFunApp) {
			listener.enterFunApp(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitFunApp) {
			listener.exitFunApp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitFunApp) {
			return visitor.visitFunApp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UminusContext extends ExprContext {
	public MINUS(): TerminalNode { return this.getToken(TntParser.MINUS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterUminus) {
			listener.enterUminus(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitUminus) {
			listener.exitUminus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitUminus) {
			return visitor.visitUminus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterPow) {
			listener.enterPow(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitPow) {
			listener.exitPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitPow) {
			return visitor.visitPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultDivContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(TntParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(TntParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterMultDiv) {
			listener.enterMultDiv(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitMultDiv) {
			listener.exitMultDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitMultDiv) {
			return visitor.visitMultDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PlusMinusContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterPlusMinus) {
			listener.enterPlusMinus(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitPlusMinus) {
			listener.exitPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitPlusMinus) {
			return visitor.visitPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIfElse) {
			listener.enterIfElse(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIfElse) {
			listener.exitIfElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIfElse) {
			return visitor.visitIfElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationsContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(TntParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(TntParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(TntParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(TntParser.LE, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(TntParser.NE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.EQ, 0); }
	public ASGN(): TerminalNode | undefined { return this.tryGetToken(TntParser.ASGN, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TntParser.IN, 0); }
	public NOTIN(): TerminalNode | undefined { return this.tryGetToken(TntParser.NOTIN, 0); }
	public SUBSETEQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.SUBSETEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterRelations) {
			listener.enterRelations(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitRelations) {
			listener.exitRelations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitRelations) {
			return visitor.visitRelations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ErrorEqContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterErrorEq) {
			listener.enterErrorEq(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitErrorEq) {
			listener.exitErrorEq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitErrorEq) {
			return visitor.visitErrorEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(TntParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(TntParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IffContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IFF(): TerminalNode { return this.getToken(TntParser.IFF, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIff) {
			listener.enterIff(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIff) {
			listener.exitIff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIff) {
			return visitor.visitIff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImpliesContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IMPLIES(): TerminalNode { return this.getToken(TntParser.IMPLIES, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterImplies) {
			listener.enterImplies(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitImplies) {
			listener.exitImplies(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitImplies) {
			return visitor.visitImplies(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixCallContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterInfixCall) {
			listener.enterInfixCall(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitInfixCall) {
			listener.exitInfixCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitInfixCall) {
			return visitor.visitInfixCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndActionContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterAndAction) {
			listener.enterAndAction(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitAndAction) {
			listener.exitAndAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitAndAction) {
			return visitor.visitAndAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrActionContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOrAction) {
			listener.enterOrAction(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOrAction) {
			listener.exitOrAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOrAction) {
			return visitor.visitOrAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralOrIdContext extends ExprContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(TntParser.INT, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(TntParser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TntParser.STRING, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLiteralOrId) {
			listener.enterLiteralOrId(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLiteralOrId) {
			listener.exitLiteralOrId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLiteralOrId) {
			return visitor.visitLiteralOrId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecordContext extends ExprContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterRecord) {
			listener.enterRecord(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitRecord) {
			listener.exitRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitRecord) {
			return visitor.visitRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SequenceContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitSequence) {
			return visitor.visitSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetInContext extends ExprContext {
	public operDef(): OperDefContext {
		return this.getRuleContext(0, OperDefContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLetIn) {
			listener.enterLetIn(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLetIn) {
			listener.exitLetIn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLetIn) {
			return visitor.visitLetIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(TntParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(TntParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterParen) {
			listener.enterParen(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitParen) {
			listener.exitParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitParen) {
			return visitor.visitParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracesContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterBraces) {
			listener.enterBraces(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitBraces) {
			listener.exitBraces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitBraces) {
			return visitor.visitBraces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	public identOrHole(): IdentOrHoleContext[];
	public identOrHole(i: number): IdentOrHoleContext;
	public identOrHole(i?: number): IdentOrHoleContext | IdentOrHoleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentOrHoleContext);
		} else {
			return this.getRuleContext(i, IdentOrHoleContext);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(TntParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_lambda; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentOrHoleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(TntParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_identOrHole; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIdentOrHole) {
			listener.enterIdentOrHole(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIdentOrHole) {
			listener.exitIdentOrHole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIdentOrHole) {
			return visitor.visitIdentOrHole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentOrStarContext extends ParserRuleContext {
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_identOrStar; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterIdentOrStar) {
			listener.enterIdentOrStar(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitIdentOrStar) {
			listener.exitIdentOrStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitIdentOrStar) {
			return visitor.visitIdentOrStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TntParser.IDENTIFIER);
		} else {
			return this.getToken(TntParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_path; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaOrExprContext extends ParserRuleContext {
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_lambdaOrExpr; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLambdaOrExpr) {
			listener.enterLambdaOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLambdaOrExpr) {
			listener.exitLambdaOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLambdaOrExpr) {
			return visitor.visitLambdaOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public lambdaOrExpr(): LambdaOrExprContext[];
	public lambdaOrExpr(i: number): LambdaOrExprContext;
	public lambdaOrExpr(i?: number): LambdaOrExprContext | LambdaOrExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdaOrExprContext);
		} else {
			return this.getRuleContext(i, LambdaOrExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_argList; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalCallNameContext extends ParserRuleContext {
	public _op!: Token;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TntParser.IN, 0); }
	public NOTIN(): TerminalNode | undefined { return this.tryGetToken(TntParser.NOTIN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(TntParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TntParser.OR, 0); }
	public IFF(): TerminalNode | undefined { return this.tryGetToken(TntParser.IFF, 0); }
	public IMPLIES(): TerminalNode | undefined { return this.tryGetToken(TntParser.IMPLIES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(TntParser.SET, 0); }
	public SEQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.SEQ, 0); }
	public SUBSETEQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.SUBSETEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_normalCallName; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterNormalCallName) {
			listener.enterNormalCallName(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitNormalCallName) {
			listener.exitNormalCallName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitNormalCallName) {
			return visitor.visitNormalCallName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameAfterDotContext extends ParserRuleContext {
	public _op!: Token;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(TntParser.IDENTIFIER, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TntParser.IN, 0); }
	public NOTIN(): TerminalNode | undefined { return this.tryGetToken(TntParser.NOTIN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(TntParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TntParser.OR, 0); }
	public IFF(): TerminalNode | undefined { return this.tryGetToken(TntParser.IFF, 0); }
	public IMPLIES(): TerminalNode | undefined { return this.tryGetToken(TntParser.IMPLIES, 0); }
	public SUBSETEQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.SUBSETEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_nameAfterDot; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterNameAfterDot) {
			listener.enterNameAfterDot(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitNameAfterDot) {
			listener.exitNameAfterDot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitNameAfterDot) {
			return visitor.visitNameAfterDot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(TntParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TntParser.OR, 0); }
	public IFF(): TerminalNode | undefined { return this.tryGetToken(TntParser.IFF, 0); }
	public IMPLIES(): TerminalNode | undefined { return this.tryGetToken(TntParser.IMPLIES, 0); }
	public SUBSETEQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.SUBSETEQ, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TntParser.IN, 0); }
	public NOTIN(): TerminalNode | undefined { return this.tryGetToken(TntParser.NOTIN, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(TntParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(TntParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(TntParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(TntParser.LE, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(TntParser.NE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(TntParser.EQ, 0); }
	public ASGN(): TerminalNode | undefined { return this.tryGetToken(TntParser.ASGN, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(TntParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(TntParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(TntParser.MOD, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TntParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_operator; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TntParser.STRING, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(TntParser.BOOL, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(TntParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TntParser.RULE_literal; }
	// @Override
	public enterRule(listener: TntListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TntListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TntVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


