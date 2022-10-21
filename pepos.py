import os
import os.path as op
import requests

def download_url(url, path):
    with open(path ,"wb") as wfp:
        wfp.write(requests.get(url).content)


with open("./data/data0.csv") as fp:
    line = fp.readline().strip()

pepos_url=dict([[int(l[0]), ":".join(l[1:])] for l in [l.split(":") for l in line.strip().split(",")]])
pepos = list(pepos_url.keys())
pepos.sort()

for pepo, url in pepos_url.items():
    path = op.expanduser(f"./images/{pepo}.png")
    if op.exists(path):
        continue
    download_url(url, path)

