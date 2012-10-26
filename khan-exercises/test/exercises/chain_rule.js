Khan.testExercise({"exercise":"chain_rule_1","problems":[{"seed":1355121034,"type":"0","VARS":{"INNER":{"f":["+",["*",1,["^","x",6]]],"ddxF":["+",["*",6,["^","x",5]]],"wrongs":[["+",["*",6,["^","x",6]]],["+"],["+",["*",-6,["^","x",5]]],["+",["*",1,["^","x",5]]],["+",["*",-1,["^","x",6]]]],"fText":"x^{6}","ddxFText":"6x^{5}","wrongsText":["6x^{6}","","-6x^{5}","x^{5}","-x^{6}"]},"OUTER":{"f":["+",["*",1,["^",["+",["*",1,["^","x",6]]],6]]],"ddxF":["+",["*",6,["^",["+",["*",1,["^","x",6]]],5]]],"wrongs":[["+",["*",6,["^",["+",["*",1,["^","x",6]]],6]]],["+"],["+",["*",-6,["^",["+",["*",1,["^","x",6]]],5]]],["+",["*",1,["^",["+",["*",1,["^","x",6]]],5]]],["+",["*",-1,["^",["+",["*",1,["^","x",6]]],6]]]],"fText":"(x^{6})^{6}","ddxFText":"6(x^{6})^{5}","wrongsText":["6(x^{6})^{6}","","-6(x^{6})^{5}","(x^{6})^{5}","-(x^{6})^{6}"]},"DERIVATIVE":"(6(x^{6})^{5})(6x^{5})","NOTATION":{"f":"y","ddxF":"y'","diffHint":"y=Ax^{n} \\implies y'=n \\cdot Ax^{n-1}"}},"solution":"(6(x^{6})^{5})(6x^{5})","pass":true},{"seed":24485902,"type":"0","VARS":{"INNER":{"f":["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]],"ddxF":["+",["*",-15,["^","x",2]],["*",2,"x"]],"fText":"-5x^{3}+x^{2}","ddxFText":"-15x^{2}+2x","notation":{"f":"f(x)","ddxF":"f'(x)","diffHint":"f'(Ax^{n})=n \\cdot Ax^{n-1}"},"hints":["f'(-5x^{3}) = 3 \\cdot -5x^{3-1} = -15x^{2}","f'(x^{2}) = 2 \\cdot 1x^{2-1} = 2x"],"wrongs":[["+",["*",-15,["^","x",3]],["*",2,["^","x",2]]],["+",["*",-15,["^","x",2]]],["+",["*",15,["^","x",2]],["*",-2,"x"]],["+",["*",-5,["^","x",2]],["*",1,"x"]],["+",["*",5,["^","x",3]],["*",-1,["^","x",2]]]],"wrongsText":["-15x^{3}+2x^{2}","-15x^{2}","15x^{2}-2x","-5x^{2}+x","5x^{3}-x^{2}"]},"OUTER":{"wrongs":[["sin",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]],["csc",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]],["sec",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]],["tan",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]],["-",["sec",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]]],["-",["cos",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]]]],"f":["cos",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]],"ddxF":["-",["sin",["+",["*",-5,["^","x",3]],["*",1,["^","x",2]]]]],"fText":"\\cos{(-5x^{3}+x^{2})}","ddxFText":"-\\sin{(-5x^{3}+x^{2})}","wrongsText":["\\sin{(-5x^{3}+x^{2})}","\\sec{(-5x^{3}+x^{2})}","\\sec{(-5x^{3}+x^{2})}","\\tan{(-5x^{3}+x^{2})}","-\\sec{(-5x^{3}+x^{2})}","-\\cos{(-5x^{3}+x^{2})}"]},"DERIVATIVE":"(-\\sin{(-5x^{3}+x^{2})})(-15x^{2}+2x)","NOTATION":{"f":"y","ddxF":"y'","diffHint":"y=Ax^{n} \\implies y'=n \\cdot Ax^{n-1}"}},"solution":"(-\\sin{(-5x^{3}+x^{2})})(-15x^{2}+2x)","pass":true},{"seed":220506100,"type":"0","VARS":{"INNER":{"f":["+",["*",-3,["^","x",2]],["*",3,"x"],5],"ddxF":["+",["*",-6,"x"],3],"fText":"-3x^{2}+3x+5","ddxFText":"-6x+3","notation":{"f":"a","ddxF":"\\frac{da}{dx}","diffHint":"a=Ax^{n} \\implies \\frac{da}{dx}=n \\cdot Ax^{n-1}"},"hints":["a=-3x^{2} \\implies \\frac{da}{dx} = 2 \\cdot -3x^{2-1} = -6x","a=3x \\implies \\frac{da}{dx} = 1 \\cdot 3x^{1-1} = 3","a=5 \\implies \\frac{da}{dx} = 0 \\cdot 5x^{0-1} = 0"],"wrongs":[["+",["*",-6,["^","x",2]],["*",3,"x"]],["+",["*",-6,"x"],3],["+",["*",6,"x"],-3],["+",["*",-3,"x"],3,["*",5,["^","x",-1]]],["+",["*",3,["^","x",2]],["*",-3,"x"],-5]],"wrongsText":["-6x^{2}+3x","-6x+3","6x-3","-3x+3+5x^{-1}","3x^{2}-3x-5"]},"OUTER":{"wrongs":[["sin",["+",["*",-3,["^","x",2]],["*",3,"x"],5]],["csc",["+",["*",-3,["^","x",2]],["*",3,"x"],5]],["sec",["+",["*",-3,["^","x",2]],["*",3,"x"],5]],["tan",["+",["*",-3,["^","x",2]],["*",3,"x"],5]],["-",["sec",["+",["*",-3,["^","x",2]],["*",3,"x"],5]]],["-",["cos",["+",["*",-3,["^","x",2]],["*",3,"x"],5]]]],"f":["cos",["+",["*",-3,["^","x",2]],["*",3,"x"],5]],"ddxF":["-",["sin",["+",["*",-3,["^","x",2]],["*",3,"x"],5]]],"fText":"\\cos{(-3x^{2}+3x+5)}","ddxFText":"-\\sin{(-3x^{2}+3x+5)}","wrongsText":["\\sin{(-3x^{2}+3x+5)}","\\sec{(-3x^{2}+3x+5)}","\\sec{(-3x^{2}+3x+5)}","\\tan{(-3x^{2}+3x+5)}","-\\sec{(-3x^{2}+3x+5)}","-\\cos{(-3x^{2}+3x+5)}"]},"DERIVATIVE":"(-\\sin{(-3x^{2}+3x+5)})(-6x+3)","NOTATION":{"f":"f(x)","ddxF":"f'(x)","diffHint":"f'(Ax^{n})=n \\cdot Ax^{n-1}"}},"solution":"(-\\sin{(-3x^{2}+3x+5)})(-6x+3)","pass":true},{"seed":98772125,"type":"0","VARS":{"INNER":{"wrongs":[["sin","x"],["csc","x"],["sec","x"],["tan","x"],["-",["sec","x"]],["-",["cos","x"]]],"f":["sin","x"],"ddxF":["cos","x"],"fText":"\\sin{x}","ddxFText":"\\cos{x}","wrongsText":["\\sin{x}","\\sec{x}","\\sec{x}","\\tan{x}","-\\sec{x}","-\\cos{x}"]},"OUTER":{"wrongs":[["sin",["sin","x"]],["csc",["sin","x"]],["sec",["sin","x"]],["tan",["sin","x"]],["-",["sec",["sin","x"]]],["-",["cos",["sin","x"]]]],"f":["cos",["sin","x"]],"ddxF":["-",["sin",["sin","x"]]],"fText":"\\cos{(\\sin{x})}","ddxFText":"-\\sin{(\\sin{x})}","wrongsText":["\\sin{(\\sin{x})}","\\sec{(\\sin{x})}","\\sec{(\\sin{x})}","\\tan{(\\sin{x})}","-\\sec{(\\sin{x})}","-\\cos{(\\sin{x})}"]},"DERIVATIVE":"(-\\sin{(\\sin{x})})(\\cos{x})","NOTATION":{"f":"g(x)","ddxF":"g'(x)","diffHint":"g'(Ax^{n})=n \\cdot Ax^{n-1}"}},"solution":"(-\\sin{(\\sin{x})})(\\cos{x})","pass":true},{"seed":64189607,"type":"0","VARS":{"INNER":{"wrongs":[["*","x",["^","e",["-","x",1]]],["frac",1,"x"],["*","x",["^","e","x"]],["^","e",["-","x",1]],["^",["-","e","x"],"x"],["frac","e","x"]],"f":["^","e","x"],"ddxF":["^","e","x"],"fText":"e^{x}","ddxFText":"e^{x}","wrongsText":["xe^{x-1}","\\frac{1}{x}","xe^{x}","e^{x-1}","(e-x)^{x}","\\frac{e}{x}"]},"OUTER":{"f":["+",["*",1,["^",["^","e","x"],6]]],"ddxF":["+",["*",6,["^",["^","e","x"],5]]],"wrongs":[["+",["*",6,["^",["^","e","x"],6]]],["+"],["+",["*",-6,["^",["^","e","x"],5]]],["+",["*",1,["^",["^","e","x"],5]]],["+",["*",-1,["^",["^","e","x"],6]]]],"fText":"(e^{x})^{6}","ddxFText":"6(e^{x})^{5}","wrongsText":["6(e^{x})^{6}","","-6(e^{x})^{5}","(e^{x})^{5}","-(e^{x})^{6}"]},"DERIVATIVE":"(6(e^{x})^{5})(e^{x})","NOTATION":{"f":"f(x)","ddxF":"f'(x)","diffHint":"f'(Ax^{n})=n \\cdot Ax^{n-1}"}},"solution":"(6(e^{x})^{5})(e^{x})","pass":true},{"seed":86942052,"type":"0","VARS":{"INNER":{"wrongs":[["sin","x"],["csc","x"],["sec","x"],["tan","x"],["-",["sec","x"]],["-",["cos","x"]]],"f":["tan","x"],"ddxF":["^",["sec","x"],2],"fText":"\\tan{x}","ddxFText":"\\sec^{2} {x}","wrongsText":["\\sin{x}","\\sec{x}","\\sec{x}","\\tan{x}","-\\sec{x}","-\\cos{x}"]},"OUTER":{"wrongs":[["*",["tan","x"],["^","e",["-",["tan","x"],1]]],["frac",1,["tan","x"]],["*",["tan","x"],["^","e",["tan","x"]]],["^","e",["-",["tan","x"],1]],["^",["-","e",["tan","x"]],["tan","x"]],["frac","e",["tan","x"]]],"f":["^","e",["tan","x"]],"ddxF":["^","e",["tan","x"]],"fText":"e^{\\tan{x}}","ddxFText":"e^{\\tan{x}}","wrongsText":["(\\tan{x})(e^{\\tan{x}-1})","\\frac{1}{\\tan{x}}","(\\tan{x})(e^{\\tan{x}})","e^{\\tan{x}-1}","(e-\\tan{x})^{\\tan{x}}","\\frac{e}{\\tan{x}}"]},"DERIVATIVE":"e^{\\tan{x}}\\sec^{2} {x}","NOTATION":{"f":"g(x)","ddxF":"g'(x)","diffHint":"g'(Ax^{n})=n \\cdot Ax^{n-1}"}},"solution":"None of the above.","pass":true},{"seed":85691135,"type":"0","VARS":{"INNER":{"f":["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1],"ddxF":["+",["*",-6,["^","x",2]],["*",10,"x"],3],"fText":"-2x^{3}+5x^{2}+3x-1","ddxFText":"-6x^{2}+10x+3","notation":{"f":"a","ddxF":"\\frac{da}{dx}","diffHint":"a=Ax^{n} \\implies \\frac{da}{dx}=n \\cdot Ax^{n-1}"},"hints":["a=-2x^{3} \\implies \\frac{da}{dx} = 3 \\cdot -2x^{3-1} = -6x^{2}","a=5x^{2} \\implies \\frac{da}{dx} = 2 \\cdot 5x^{2-1} = 10x","a=3x \\implies \\frac{da}{dx} = 1 \\cdot 3x^{1-1} = 3","a=-1 \\implies \\frac{da}{dx} = 0 \\cdot -1x^{0-1} = 0"],"wrongs":[["+",["*",-6,["^","x",3]],["*",10,["^","x",2]],["*",3,"x"]],["+",["*",-6,["^","x",2]],["*",10,"x"],3],["+",["*",6,["^","x",2]],["*",-10,"x"],-3],["+",["*",-2,["^","x",2]],["*",5,"x"],3,["*",-1,["^","x",-1]]],["+",["*",2,["^","x",3]],["*",-5,["^","x",2]],["*",-3,"x"],1]],"wrongsText":["-6x^{3}+10x^{2}+3x","-6x^{2}+10x+3","6x^{2}-10x-3","-2x^{2}+5x+3-x^{-1}","2x^{3}-5x^{2}-3x+1"]},"OUTER":{"wrongs":[["sin",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]],["csc",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]],["sec",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]],["tan",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]],["-",["sec",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]]],["-",["cos",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]]]],"f":["cos",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]],"ddxF":["-",["sin",["+",["*",-2,["^","x",3]],["*",5,["^","x",2]],["*",3,"x"],-1]]],"fText":"\\cos{(-2x^{3}+5x^{2}+3x-1)}","ddxFText":"-\\sin{(-2x^{3}+5x^{2}+3x-1)}","wrongsText":["\\sin{(-2x^{3}+5x^{2}+3x-1)}","\\sec{(-2x^{3}+5x^{2}+3x-1)}","\\sec{(-2x^{3}+5x^{2}+3x-1)}","\\tan{(-2x^{3}+5x^{2}+3x-1)}","-\\sec{(-2x^{3}+5x^{2}+3x-1)}","-\\cos{(-2x^{3}+5x^{2}+3x-1)}"]},"DERIVATIVE":"(-\\sin{(-2x^{3}+5x^{2}+3x-1)})(-6x^{2}+10x+3)","NOTATION":{"f":"f(x)","ddxF":"\\frac{d}{dx}f(x)","diffHint":"f(x)=Ax^{n} \\implies \\frac{d}{dx}f(x)=n \\cdot Ax^{n-1}"}},"solution":"(-\\sin{(-2x^{3}+5x^{2}+3x-1)})(-6x^{2}+10x+3)","pass":true},{"seed":133985244,"type":"0","VARS":{"INNER":{"wrongs":[["frac",1,["ln","x"]],["^","e","x"],["frac",1,["^","e","x"]],["ln","x"],["frac",1,["^","x",2]],"x"],"f":["ln","x"],"ddxF":["frac",1,"x"],"fText":"\\ln{x}","ddxFText":"\\frac{1}{x}","wrongsText":["\\frac{1}{\\ln{x}}","e^{x}","\\frac{1}{e^{x}}","\\ln{x}","\\frac{1}{x^{2}}","x"]},"OUTER":{"f":["+",["*",1,["^",["ln","x"],2]]],"ddxF":["+",["*",2,["ln","x"]]],"wrongs":[["+",["*",2,["^",["ln","x"],2]]],["+"],["+",["*",-2,["ln","x"]]],["+",["*",1,["ln","x"]]],["+",["*",-1,["^",["ln","x"],2]]]],"fText":"(\\ln{x})^{2}","ddxFText":"2(\\ln{x})","wrongsText":["2(\\ln{x})^{2}","","-2(\\ln{x})","\\ln{x}","-(\\ln{x})^{2}"]},"DERIVATIVE":"(2(\\ln{x}))(\\frac{1}{x})","NOTATION":{"f":"y","ddxF":"y'","diffHint":"y=Ax^{n} \\implies y'=n \\cdot Ax^{n-1}"}},"solution":"None of the above.","pass":true}],"issues":2});