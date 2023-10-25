import pprint
from typing import Dict, Optional, Union

Key = Union[int, str]  # create custom type
Value = Union[str, int, list, Dict, set]

data: Dict[Key, Value] = {"fname": "Ahmad", "lname": "Ali", "education": "Abdullah"}
pprint.pprint(data)
