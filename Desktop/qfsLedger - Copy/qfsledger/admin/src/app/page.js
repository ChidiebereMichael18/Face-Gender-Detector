'use client';
import { useState, useEffect } from 'react';
import { api } from '@/utils/api';
import { Search, Edit2, ChevronDown, X, Filter } from 'lucide-react';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [balances, setBalances] = useState({
    totalBalance: 0,
    bitcoin: 0,
    ethereum: 0,
    ripple: 0,
    stellar: 0
  });
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    balanceRange: 'all'
  });
  const [fundingData, setFundingData] = useState({
    amount: 0,
    currency: 'USD'
  });
  const [isFunding, setIsFunding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.getAllUsers();
      setUsers(response.users);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setBalances({
      totalBalance: user.totalBalance || 0,
      bitcoin: user.cryptoBalances?.bitcoin || 0,
      ethereum: user.cryptoBalances?.ethereum || 0,
      ripple: user.cryptoBalances?.ripple || 0,
      stellar: user.cryptoBalances?.stellar || 0
    });
    setIsEditing(true);
  };

  const handleBalanceUpdate = async () => {
    try {
      setIsUpdating(true);
      await api.updateUserBalances(selectedUser.id, balances);
      setIsEditing(false);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error('Failed to update balances:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleFundUser = async () => {
    try {
      setIsFunding(true);
      await api.fundUser(selectedUser.id, fundingData);
      setIsEditing(false);
      fetchUsers();
    } catch (error) {
      console.error('Failed to fund user:', error);
    } finally {
      setIsFunding(false);
    }
  };

  const applyFilters = (users) => {
    return users.filter(user => {
      const matchesSearch = user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = filters.status === 'all' ? true :
        filters.status === 'verified' ? user.isVerified :
        !user.isVerified;

      const matchesBalance = filters.balanceRange === 'all' ? true :
        filters.balanceRange === 'high' ? (user.totalBalance || 0) > 10000 :
        filters.balanceRange === 'medium' ? (user.totalBalance || 0) > 1000 && (user.totalBalance || 0) <= 10000 :
        (user.totalBalance || 0) <= 1000;

      return matchesSearch && matchesStatus && matchesBalance;
    });
  };

  const filteredUsers = applyFilters(users);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
          {/* Desktop search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total Balance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium">{user.username}</div>
                          <div className="text-sm text-gray-400">{user.firstName} {user.lastName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">${user.totalBalance?.toLocaleString() || '0'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleUserSelect(user)}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <Edit2 size={16} />
                        Edit Balances
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Floating Action Button (Mobile Only) */}
        <button
          onClick={() => setIsSearchModalOpen(true)}
          className="fixed right-4 bottom-4 md:hidden bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg"
        >
          <Search size={24} />
        </button>

        {/* Search Modal (Mobile Only) */}
        {isSearchModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 md:hidden">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSearchModalOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg"
                  >
                    <X size={24} />
                  </button>
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    autoFocus
                  />
                </div>
              </div>

              <div className="p-4 flex-1 overflow-auto">
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm text-gray-400 block mb-2">Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                    >
                      <option value="all">All Users</option>
                      <option value="verified">Verified Only</option>
                      <option value="unverified">Unverified Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 block mb-2">Balance Range</label>
                    <select
                      value={filters.balanceRange}
                      onChange={(e) => setFilters(prev => ({ ...prev, balanceRange: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                    >
                      <option value="all">All Balances</option>
                      <option value="high">High Balance ($10,000)</option>
                      <option value="medium">Medium Balance ($1,000-$10,000)</option>
                      <option value="low">Low Balance ($1,000)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  {filteredUsers.map(user => (
                    <div
                      key={user.id}
                      className="bg-gray-800 rounded-lg p-4"
                      onClick={() => {
                        handleUserSelect(user);
                        setIsSearchModalOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium">{user.username}</div>
                          <div className="text-sm text-gray-400">{user.email}</div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-gray-400">Balance: ${user.totalBalance?.toLocaleString() || '0'}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.isVerified ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {user.isVerified ? 'Verified' : 'Unverified'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Balance Modal */}
        {isEditing && selectedUser && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md m-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Edit User Balances</h3>
                <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-lg font-medium mb-4">Fund User</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-400">Amount</label>
                      <input
                        type="number"
                        value={fundingData.amount}
                        onChange={(e) => setFundingData(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Currency</label>
                      <select
                        value={fundingData.currency}
                        onChange={(e) => setFundingData(prev => ({ ...prev, currency: e.target.value }))}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 mt-1"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                    <button
                      onClick={handleFundUser}
                      disabled={isFunding}
                      className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2"
                    >
                      {isFunding ? 'Processing...' : 'Fund User'}
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-4">Crypto Balances</h4>
                  <div>
                    <label className="text-sm text-gray-400">Total Balance</label>
                    <input
                      type="number"
                      value={balances.totalBalance}
                      onChange={(e) => setBalances(prev => ({ ...prev, totalBalance: parseFloat(e.target.value) || 0 }))}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Bitcoin (BTC)</label>
                    <input
                      type="number"
                      value={balances.bitcoin}
                      onChange={(e) => setBalances(prev => ({ ...prev, bitcoin: parseFloat(e.target.value) || 0 }))}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Ethereum (ETH)</label>
                    <input
                      type="number"
                      value={balances.ethereum}
                      onChange={(e) => setBalances(prev => ({ ...prev, ethereum: parseFloat(e.target.value) || 0 }))}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Ripple (XRP)</label>
                    <input
                      type="number"
                      value={balances.ripple}
                      onChange={(e) => setBalances(prev => ({ ...prev, ripple: parseFloat(e.target.value) || 0 }))}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Stellar (XLM)</label>
                    <input
                      type="number"
                      value={balances.stellar}
                      onChange={(e) => setBalances(prev => ({ ...prev, stellar: parseFloat(e.target.value) || 0 }))}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 mt-1"
                    />
                  </div>

                  <button
                    onClick={handleBalanceUpdate}
                    disabled={isUpdating}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 mt-4"
                  >
                    {isUpdating ? 'Updating...' : 'Update Balances'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
