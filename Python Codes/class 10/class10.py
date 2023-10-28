from typing import Dict, Tuple


def myfunction(a: int, b: int, *abc: Tuple[str, ...], **xyz: Dict[str, int]) -> None:
    print(a, b, abc, xyz)


myfunction(1, 2, 3, 4, 5, 4, 2, c=10, d=20)
