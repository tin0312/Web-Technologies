#!/usr/bin/env python
# coding: utf-8

# In[1]:


import random
import time
import matplotlib.pyplot as plt
import numpy as np

# In[3]:


# Create 2 hash tables
a = Hash_Table1()
b = Hash_Table2()


# In[ ]:


# Making sure hashtable could hold up to 10000 entries
class Hash_Table1:
    def __init__(self):
        self.capacity = 10000
        self.size = 0
        self.buckets = [None] * self.capacity


class Hash_Table2:
    def __init__(self):
        self.capacity = 10000
        self.size = 0
        self.buckets = [None] * self.capacity


# In[ ]:


Values = list(range(1000, 9000, 1000))


# In[ ]:


# Identify Hash Function for Linear Probing Approach
def hash(self, key):
    # Hash Algorithms: h(k)=k % 9
    if self.Hash_Table1[index] == None:
        return index
    else:
        while self.Hash_Table1[index] != None:
            index = (index + 1) % 9

        return index
    if self.Hash_Table2[index] == None:
        return index
    else:
        while self.Hash_Table2index] != None:
            index = (index + 1) % 9

        return index

    # In[ ]:

    # Linear probing approach for 2 Hash Tables

    def insert(self, key):
        index = self.hash(key)
        self.Hash_Table1[index] = key

    def search(self, key):
        index = key % 9
        if self.Hash_Table1[index] != key:
            while self.Hash_Table1[index] != key and self.Hash_Table1[index] != None:
                index = (index + 1) % 9

        if self.Hash_Table1[index] == key:
            return index
        else:
            return None

    def insert(self, key):
        index = self.hash(key)
        self.Hash_Table2[index] = key

    def search(self, key):
        index = key % 9
        if self.Hash_Table2[index] != key:
            while self.Hash_Table2[index] != key and self.Hash_Table2[index] != None:
                index = (index + 1) % 9

        if self.Hash_Table1[index] == key:
            return index
        else:
            return None


# In[ ]:


# Identify Hash Algorithms for Quadratic Probing Approach for 2 Hash Tables

def hash(self, key):
    # Hash function h(k) = k%9
    index = key % 9

    if self.Hash_Table1[index] == None:
        return index
    else:
        i = 1
        # Quadratic probing Execution
        while self.Hash_Table1[(index + (i * i)) % 9] != None:
            i += 1

        return (index + (i * i)) % 9
    if self.Hash_Table2[index] == None:
        return index
    else:
        i = 1
        # Quadratic probing Execution
        while self.Hash_Table2[(index + (i * i)) % 9] != None:
            i += 1

        return (index + (i * i)) % 9


# In[ ]:


# Hash Fucntions for Quadratic Probing Approach for 2 Hash Tables
def insert(self, key):
    index = self.hash(key)
    self.Hash_Table1[index] = key


def search(self, key):
    index = key % 10

    i = 0
    if self.Hash_Table1[index] != key:
        while self.Hash_Table1[(index + (i * i)) % 9] != key and self.Hash_Table1[(index + (i * i)) % 9] != None:
            i += 1

    if self.Hash_Table1[(index + (i * i)) % 9] == key:
        return (index + (i * i)) % 9
    else:
        return None


def insert(self, key):
    index = self.hash(key)
    self.Hash_Table2[index] = key


def search(self, key):
    index = key % 9

    i = 0
    if self.Hash_Table2[index] != key:
        while self.Hash_Table2[(index + (i * i)) % 10] != key and self.Hash_Table1[(index + (i * i)) % 9] != None:
            i += 1

    if self.Hash_Table1[(index + (i * i)) % 9] == key:
        return (index + (i * i)) % 9
    else:
        return None


# In[ ]:


# Generate random Values of M
for h in range(M):
    key = random.randint(1000, 100000000)

